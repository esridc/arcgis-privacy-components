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
    return <div
      class="popup open"
    >
      <p><slot>Simple explanation of cookie privacy...</slot></p>
      <calcite-button appearance="solid" width="full" onClick={() => this.acceptAllCookies()}>Accept All Cookies</calcite-button>
      <br />
      <calcite-button appearance="transparent" width="full" onClick={() => this.openCookieSettings()}>Cookie Settings</calcite-button>
    </div>;
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
