import type { Schema, Attribute } from '@strapi/strapi';

export interface TicketsSingleTicket extends Schema.Component {
  collectionName: 'components_tickets_single_tickets';
  info: {
    displayName: 'Single Ticket';
    description: '';
  };
  attributes: {
    TicketImage: Attribute.Media<'images'>;
  };
}

export interface TicketsDoubleTicket extends Schema.Component {
  collectionName: 'components_tickets_double_tickets';
  info: {
    displayName: 'DoubleTicket';
    description: '';
  };
  attributes: {
    Ticket1: Attribute.Media<'images'>;
    Ticket2: Attribute.Media<'images'>;
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

export interface SubsectionsSectionWithImage extends Schema.Component {
  collectionName: 'components_subsections_section_with_images';
  info: {
    displayName: 'SectionWithImage';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media<'images'>;
  };
}

export interface LinksLink1 extends Schema.Component {
  collectionName: 'components_links_link1s';
  info: {
    displayName: 'Link1';
  };
  attributes: {
    Title: Attribute.String;
    URL: Attribute.String;
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

export interface TilesImagePriceTile extends Schema.Component {
  collectionName: 'components_tiles_image_price_tiles';
  info: {
    displayName: 'ImagePriceTile';
  };
  attributes: {
    TileData: Attribute.JSON;
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

export interface ListsBulletPointList extends Schema.Component {
  collectionName: 'components_lists_bullet_point_lists';
  info: {
    displayName: 'BulletPointList';
  };
  attributes: {
    BulletPoints: Attribute.JSON;
  };
}

export interface DropdownPlainTextDropdown extends Schema.Component {
  collectionName: 'components_dropdown_plain_text_dropdowns';
  info: {
    displayName: 'PlainTextDropdown';
  };
  attributes: {
    DropdownData: Attribute.JSON;
  };
}

export interface DropdownDropdownNormal extends Schema.Component {
  collectionName: 'components_dropdown_dropdown_normals';
  info: {
    displayName: 'DropdownNormal';
  };
  attributes: {
    DropdownData: Attribute.JSON;
  };
}

export interface GalleryGalleryWithDescription extends Schema.Component {
  collectionName: 'components_gallery_gallery_with_descriptions';
  info: {
    displayName: 'GalleryWithDescription';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    GalleryData: Attribute.JSON;
  };
}

export interface GalleryGallerySmall extends Schema.Component {
  collectionName: 'components_gallery_gallery_smalls';
  info: {
    displayName: 'GallerySmall';
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Media<'images', true>;
  };
}

export interface GalleryGalleryBasic extends Schema.Component {
  collectionName: 'components_gallery_gallery_basics';
  info: {
    displayName: 'GalleryBasic';
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Media<'images', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tickets.single-ticket': TicketsSingleTicket;
      'tickets.double-ticket': TicketsDoubleTicket;
      'subsections.section': SubsectionsSection;
      'subsections.section-with-image': SubsectionsSectionWithImage;
      'links.link1': LinksLink1;
      'tiles.price-tile1': TilesPriceTile1;
      'tiles.image-price-tile': TilesImagePriceTile;
      'tiles.image-desc-tile': TilesImageDescTile;
      'lists.green-tick-list-box': ListsGreenTickListBox;
      'lists.bullet-point-list': ListsBulletPointList;
      'dropdown.plain-text-dropdown': DropdownPlainTextDropdown;
      'dropdown.dropdown-normal': DropdownDropdownNormal;
      'gallery.gallery-with-description': GalleryGalleryWithDescription;
      'gallery.gallery-small': GalleryGallerySmall;
      'gallery.gallery-basic': GalleryGalleryBasic;
    }
  }
}
