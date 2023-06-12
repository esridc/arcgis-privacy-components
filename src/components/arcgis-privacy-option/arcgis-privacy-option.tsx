import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arcgis-privacy-option',
  styleUrl: 'arcgis-privacy-option.css',
  shadow: true,
})
export class ArcgisPrivacyOption {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
