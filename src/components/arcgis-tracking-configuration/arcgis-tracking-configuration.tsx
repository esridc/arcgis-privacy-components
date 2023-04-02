import { Component, Host, Listen, State, h } from '@stencil/core';
import { CookieConfig, getCookieConfig, storeCookieConfig } from '../../utils/telemetry-config';

@Component({
  tag: 'arcgis-tracking-configuration',
  styleUrl: 'arcgis-tracking-configuration.css',
  shadow: true,
})
export class ArcgisTrackingConfiguration {

  private trackingPopupEl;
  private trackingSidebarEl;

  @State() cookieConfig: CookieConfig = {};
  
  componentWillLoad() {
    this.cookieConfig = getCookieConfig();
  }
  render() {
    return (
      <Host>

        <arcgis-tracking-popup 
            ref={(el) => this.trackingPopupEl = el}   
        >
          <slot></slot>
        </arcgis-tracking-popup>
        <arcgis-tracking-sidebar 
          ref={(el) => this.trackingSidebarEl = el}
          cookieConfig={this.cookieConfig}
        ></arcgis-tracking-sidebar>
      </Host>
    );
  }

  @Listen('openCookieDetails')
  openCookieDetails() {
    this.trackingSidebarEl.open = true;    
  }

  @Listen('setCookieConfig')
  setCookieConfig(evt) {
    storeCookieConfig( evt.detail );

    this.trackingSidebarEl.open = false;
    this.trackingPopupEl.remove();
  }  

}
