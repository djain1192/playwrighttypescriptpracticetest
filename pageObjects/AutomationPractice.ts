import { expect, Locator, Page } from '@playwright/test';

export class AutomationPractice {
  readonly page: Page;
  readonly callUs: Locator;
  readonly contact: Locator;
  readonly signinButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.callUs= page.locator('.shop-phone');
    this.contact = page.locator('#contact-link > a');
    this.signinButton = page.locator('.login');  

  }

  async goto() {
    await this.page.goto("http://automationpractice.com/index.php");
  }

  async verifyLinkText()
  {
  await expect(this.callUs).toContainText('0123-456-789') 
  }
  
  async verifyContactLink()
  {
      await expect(this.contact).toBeVisible();    
  }
  
  async verifySignInButton()
  {
      await this.signinButton.click();
  }

  }
