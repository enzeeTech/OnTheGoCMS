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

export interface TicketsDoubleTicket extends Schema.Component {
  collectionName: 'components_tickets_double_tickets';
  info: {
    displayName: 'DoubleTicket';
  };
  attributes: {
    TicketData: Attribute.JSON;
  };
}

export interface TicketsSingleTicket extends Schema.Component {
  collectionName: 'components_tickets_single_tickets';
  info: {
    displayName: 'Single Ticket';
  };
  attributes: {
    TicketData: Attribute.JSON;
  };
}

export interface TilesImageDescTile extends Schema.Component {
  collectionName: 'components_tiles_image_desc_tiles';
  info: {
    displayName: 'ImageDescTile';
  };
  attributes: {
    TileData: Attribute.JSON;
  };
}

export interface TilesPriceTileNoSubtitle extends Schema.Component {
  collectionName: 'components_tiles_price_tile_no_subtitles';
  info: {
    displayName: 'PriceTileNoSubtitle';
  };
  attributes: {
    TileData: Attribute.JSON;
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
      'tickets.double-ticket': TicketsDoubleTicket;
      'tickets.single-ticket': TicketsSingleTicket;
      'tiles.image-desc-tile': TilesImageDescTile;
      'tiles.price-tile-no-subtitle': TilesPriceTileNoSubtitle;
      'tiles.price-tile1': TilesPriceTile1;
    }
  }
}
