import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { CookieConfig, getDefaultCookies } from '../../utils/telemetry-config';

@Component({
  tag: 'arcgis-privacy-popup',
  styleUrl: 'arcgis-privacy-popup.css',
  shadow: true,
})
export class ArcgisPrivacyPopup {

  /**
   * Visible state if open, or just showing cookie icon.
   */
  @Prop({ mutable: true, reflect: true }) open: boolean = true;

  /**
   * Whether the popup should popup or be inline
   */
  @Prop() view: "modal" | "popup" = "popup";

  render() {
    return this.open ? this.renderOpen() : this.renderClosed();
  }

  @Event() setCookieConfig: EventEmitter<CookieConfig>;


  private renderClosed() {
    return (
      <div class="popup closed" onClick={() => {this.open = true}}>
        <calcite-icon icon="configure" text-label="Configure Privacy Preferences"></calcite-icon>
      </div>
    )
  }

  private renderOpen() {
    let output = <div
      class={`${this.view} open`}
    >
      <p><slot>Simple explanation of cookie privacy...</slot></p>
      <calcite-button appearance="solid" width="full" onClick={() => this.acceptAllCookies()}>Accept All Cookies</calcite-button>
      <br />
      <calcite-button appearance="transparent" width="full" onClick={() => this.openCookieSettings()}>Cookie Settings</calcite-button>
    </div>;
   if(this.view === "modal") {
      output = <calcite-modal open>
         <div slot="content">
          {output}
         </div>
      </calcite-modal>
    }
   
    return output;
  }

  private acceptAllCookies() {
    const config = getDefaultCookies();
    this.setCookieConfig.emit( config );
  }

  @Event() openCookieDetails: EventEmitter<any>;
  private openCookieSettings() {
    this.openCookieDetails.emit();
  }

}
