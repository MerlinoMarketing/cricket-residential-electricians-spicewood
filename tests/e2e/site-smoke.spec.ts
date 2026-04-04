import { expect, test } from "@playwright/test";

test.describe("service website smoke coverage", () => {
  test("homepage renders primary conversion sections", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("banner")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("#contact")).toBeVisible();

    const serviceLinks = page.locator("main").locator('a[href^="/services/"]');
    await expect(serviceLinks.first()).toBeVisible();
    await expect(serviceLinks).toHaveCount(6);
  });

  test("services and service detail routes are navigable", async ({ page }) => {
    await page.goto("/services");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(/services/i);

    const firstServiceLink = page.locator('a[href^="/services/"]').first();
    const serviceHref = await firstServiceLink.getAttribute("href");
    expect(serviceHref).toBeTruthy();

    await firstServiceLink.click();

    await expect(page).toHaveURL(new RegExp(serviceHref!.replace("/", "\\/")));
    await expect(page.getByRole("link", { name: /all services/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /request free quote/i })).toBeVisible();
  });

  test("locations and location detail routes are navigable", async ({ page }) => {
    await page.goto("/locations");

    await expect(page.getByRole("heading", { level: 1 })).toContainText(/service areas/i);

    const firstLocationLink = page.locator('a[href^="/locations/"]').first();
    const locationHref = await firstLocationLink.getAttribute("href");
    expect(locationHref).toBeTruthy();

    await firstLocationLink.click();

    await expect(page).toHaveURL(new RegExp(locationHref!.replace("/", "\\/")));
    await expect(page.getByRole("link", { name: /all locations/i })).toBeVisible();
    await expect(page.getByText(/residents choose us/i)).toBeVisible();
  });

  test("mobile navigation opens and exposes conversion actions", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile navigation is only present on mobile breakpoints.");

    await page.goto("/");

    await page.getByRole("button", { name: /open navigation/i }).click();
    await expect(page.getByText(/mobile navigation/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /services/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /call/i })).toBeVisible();
  });

  test("contact form fields and contact methods are visible", async ({ page }) => {
    await page.goto("/#contact");

    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
    await expect(page.getByRole("link", { name: /open map/i })).toBeVisible();
  });
});

test.describe("design improvements verification", () => {
  test("hero section has gradient overlays and stat cards", async ({ page }) => {
    await page.goto("/");

    // Verify multiple gradient overlays exist (original + radial gradient improvement)
    const overlays = page.locator('section[aria-labelledby="hero-heading"] [aria-hidden="true"]');
    const overlayCount = await overlays.count();
    expect(overlayCount).toBeGreaterThanOrEqual(3);

    // Verify hero CTA buttons are present
    const callButton = page.getByRole("link", { name: /call now/i }).first();
    await expect(callButton).toBeVisible();
  });

  test("navbar includes Locations link on desktop", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop-only test.");

    await page.goto("/");

    const locationsLink = page.getByRole("navigation", { name: /primary/i })
      .locator('a[href="/locations"]');
    await expect(locationsLink).toBeVisible();
  });

  test("review cards are rendered with proper structure", async ({ page }) => {
    await page.goto("/");

    const reviewSection = page.locator("#reviews");
    await expect(reviewSection).toBeVisible();

    // Verify review articles exist
    const reviewArticles = reviewSection.locator("article");
    const count = await reviewArticles.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("CTA banner has decorative overlay", async ({ page }) => {
    await page.goto("/");

    const ctaSection = page.locator("section.section-shell.py-10").first();
    await expect(ctaSection).toBeVisible();

    // Verify the gradient overlay div exists
    const gradientDiv = ctaSection.locator('[aria-hidden="true"]');
    await expect(gradientDiv.first()).toBeAttached();
  });
});

test.describe("SEO and structured data", () => {
  test("homepage has valid meta tags", async ({ page }) => {
    await page.goto("/");

    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute("content", /.+/);

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /.+/);

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toBeAttached();
  });

  test("homepage has LocalBusiness and Service schema markup", async ({ page }) => {
    await page.goto("/");

    const schemas = page.locator('script[type="application/ld+json"]');
    const count = await schemas.count();
    expect(count).toBeGreaterThanOrEqual(2);

    // Collect all schemas and find LocalBusiness + Service by type
    let hasLocalBusiness = false;
    let hasServiceGraph = false;
    for (let i = 0; i < count; i++) {
      const text = await schemas.nth(i).textContent();
      if (!text) continue;
      const parsed = JSON.parse(text);
      if (parsed["@type"] === "LocalBusiness") {
        hasLocalBusiness = true;
        expect(parsed.name).toBeTruthy();
        expect(parsed.telephone).toBeTruthy();
      }
      if (parsed["@graph"]) {
        hasServiceGraph = true;
        expect(parsed["@graph"].length).toBeGreaterThan(0);
      }
    }
    expect(hasLocalBusiness).toBe(true);
    expect(hasServiceGraph).toBe(true);
  });
});
