import { Component, Event, EventEmitter, h } from '@stencil/core';
import { CookieConfig, getDefaultCookies } from '../../utils/telemetry-config';

@Component({
  tag: 'arcgis-tracking-popup',
  styleUrl: 'arcgis-tracking-popup.css',
  shadow: true,
})
export class ArcgisTrackingPopup {
  render() {
    return (
      <div class="popup">
        <p><slot>Simple explanation of cookie tracking...</slot></p>
        <calcite-button appearance="solid" width="full" onClick={() => this.acceptAllCookies()}>Accept All Cookies</calcite-button>
        <br/>
        <calcite-button appearance="transparent" width="full" onClick={() => this.openCookieSettings()}>Cookie Settings</calcite-button>
      </div>
    );
  }

  @Event() setCookieConfig: EventEmitter<CookieConfig>;
  private acceptAllCookies() {
    const config = getDefaultCookies();
    this.setCookieConfig.emit( config );
  }

  @Event() openCookieDetails: EventEmitter<any>;
  private openCookieSettings() {
    this.openCookieDetails.emit();
  }

}
