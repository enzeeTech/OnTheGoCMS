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

export interface ListsBulletPointList extends Schema.Component {
  collectionName: 'components_lists_bullet_point_lists';
  info: {
    displayName: 'BulletPointList';
  };
  attributes: {
    BulletPoints: Attribute.JSON;
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

export interface SubsectionsSection extends Schema.Component {
  collectionName: 'components_subsections_sections';
  info: {
    displayName: 'section';
  };
  attributes: {
    SectionTitle: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface TilesPriceTile1 extends Schema.Component {
  collectionName: 'components_tiles_price_tile1s';
  info: {
    displayName: 'PriceTile1';
  };
  attributes: {
    TileData: Attribute.JSON;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gallery.gallery-basic': GalleryGalleryBasic;
      'lists.bullet-point-list': ListsBulletPointList;
      'lists.green-tick-list-box': ListsGreenTickListBox;
      'subsections.section': SubsectionsSection;
      'tiles.price-tile1': TilesPriceTile1;
    }
  }
}
