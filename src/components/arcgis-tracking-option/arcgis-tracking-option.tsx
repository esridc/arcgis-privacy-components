import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arcgis-tracking-option',
  styleUrl: 'arcgis-tracking-option.css',
  shadow: true,
})
export class ArcgisTrackingOption {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
