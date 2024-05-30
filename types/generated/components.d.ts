import type { Schema, Attribute } from '@strapi/strapi';

export interface GalleryGalleryBasic extends Schema.Component {
  collectionName: 'components_gallery_gallery_basics';
  info: {
    displayName: 'GalleryBasic';
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Media;
  };
}

export interface ListsGreenTickListBox extends Schema.Component {
  collectionName: 'components_lists_green_tick_list_boxes';
  info: {
    displayName: 'GreenTickListBox';
  };
  attributes: {
    Title: Attribute.String;
    BulletPoints: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery.gallery-basic': GalleryGalleryBasic;
      'lists.green-tick-list-box': ListsGreenTickListBox;
    }
  }
}
