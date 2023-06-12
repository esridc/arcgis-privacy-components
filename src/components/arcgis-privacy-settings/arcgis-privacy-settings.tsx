import { Component, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import '@esri/calcite-components';
import { CookieConfig, CookieOptions } from '../../utils/telemetry-config';

@Component({
  tag: 'arcgis-privacy-settings',
  styleUrl: 'arcgis-privacy-settings.css',
  shadow: true,
})
export class ArcgisPrivacySettings {
  /**
   * Whether the Settings modal is open or closed
   */
  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  /**
   * Existing preference settings
   */
  @Prop({ mutable: true, reflect: true }) cookieConfig: CookieConfig = {
    [CookieOptions.necessary]: true,
    [CookieOptions.targeting]: false,
    [CookieOptions.performance]: true,
    [CookieOptions.functional]: true
  }

  // Internal reference to self 
  @Element() el: HTMLElement;

  render() {
    return [
      // <aside class={`settings${this.open ? ' open' : ''}`}>
      <calcite-modal open={this.open} aria-labelledby="modal-title" id="example-modal">
        <button onClick={() => this.closeSettings()} class="close-btn">
          &#10006; 
        </button>
        <div slot="header">
          <h2>Privacy Preference Center</h2>
        </div>
        <div slot="content">
        <p>When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.</p>
        <p>
          <a href="https://www.esri.com/en-us/privacy/manage-privacy/cookies" target="_blank">More Information</a>
        </p>
        <h2>Manage Consent Preferences</h2>
        <calcite-accordion>
          {this.renderSettingsPane('Strictly Necessary Cookies', CookieOptions.necessary,  'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.    You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.')}
          {this.renderSettingsPane('Targeting Cookies', CookieOptions.targeting,'These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.    They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.')}
          {this.renderSettingsPane('Performance Cookies', CookieOptions.performance,'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.    All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.')}
          {this.renderSettingsPane('Functional Cookies', CookieOptions.functional,'These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.    If you do not allow these cookies then some or all of these services may not function properly.')}
        </calcite-accordion>
        <calcite-button width="full" onClick={() => this.confirmChoices()}>Confirm Choices</calcite-button>
        </div>
      {/* </aside> */}
      </calcite-modal>,
      <div class={`overlay${this.open ? ' open' : ''}`} onClick={() => this.closeSettings()}></div>
    ];
  }

  private renderSettingsPane(title: string, config: CookieOptions, content: string) {
    // Default privacy to true if not set
    const checkedValue = this.cookieConfig[CookieOptions[config]] || true;

    return (
      <calcite-accordion-item heading={title}>
        <div slot="actions-start">
          <calcite-switch id={config} checked={checkedValue}></calcite-switch>
        </div>
        <p>{content}</p>
      </calcite-accordion-item>
    );
  }

  public openSettings() {
    this.open = true;
  }

  private getSettings():CookieConfig {
    const switches = Array.from(this.el.shadowRoot.querySelectorAll('calcite-switch'));
    
    const choices = {}
    switches.map((sw) => {
      // we want to use an enum and store using the same name
      choices[ sw['id'] ] = sw['checked'];
    });

    // @ts-ignore
    // the Enums and typeof are confusing validator
    return choices as CookieConfig;
  }
  public closeSettings() {
    this.open = false;
    this.getSettings();
    this.setCookieConfig.emit(this.cookieConfig);
  }

  @Event() setCookieConfig: EventEmitter<CookieConfig>;
  confirmChoices() {
    this.cookieConfig = this.getSettings();
    this.setCookieConfig.emit(this.cookieConfig);

    // Should a component close itself? - seems better to leave to orchestrator
    // this.open = false;
  }

}
