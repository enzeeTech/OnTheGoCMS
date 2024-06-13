import type { Schema, Attribute } from '@strapi/strapi';

export interface DropdownDropdownNormal extends Schema.Component {
  collectionName: 'components_dropdown_dropdown_normals';
  info: {
    displayName: 'DropdownNormal';
  };
  attributes: {
    DropdownData: Attribute.JSON;
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

export interface GalleryGallerySmall extends Schema.Component {
  collectionName: 'components_gallery_gallery_smalls';
  info: {
    displayName: 'GallerySmall';
  };
  attributes: {
    Title: Attribute.String;
    Images: Attribute.Media;
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

export interface SubsectionsSectionWithImage extends Schema.Component {
  collectionName: 'components_subsections_section_with_images';
  info: {
    displayName: 'SectionWithImage';
  };
  attributes: {
    Title: Attribute.String;
    Image: Attribute.Media;
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
    description: '';
  };
  attributes: {
    Ticket1: Attribute.Media;
    Ticket2: Attribute.Media;
  };
}

export interface TicketsSingleTicket extends Schema.Component {
  collectionName: 'components_tickets_single_tickets';
  info: {
    displayName: 'Single Ticket';
    description: '';
  };
  attributes: {
    TicketImage: Attribute.Media;
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

export interface TilesImagePriceTile extends Schema.Component {
  collectionName: 'components_tiles_image_price_tiles';
  info: {
    displayName: 'ImagePriceTile';
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
      'dropdown.dropdown-normal': DropdownDropdownNormal;
      'dropdown.plain-text-dropdown': DropdownPlainTextDropdown;
      'gallery.gallery-basic': GalleryGalleryBasic;
      'gallery.gallery-small': GalleryGallerySmall;
      'gallery.gallery-with-description': GalleryGalleryWithDescription;
      'links.link1': LinksLink1;
      'lists.bullet-point-list': ListsBulletPointList;
      'lists.green-tick-list-box': ListsGreenTickListBox;
      'subsections.section-with-image': SubsectionsSectionWithImage;
      'subsections.section': SubsectionsSection;
      'tickets.double-ticket': TicketsDoubleTicket;
      'tickets.single-ticket': TicketsSingleTicket;
      'tiles.image-desc-tile': TilesImageDescTile;
      'tiles.image-price-tile': TilesImagePriceTile;
      'tiles.price-tile1': TilesPriceTile1;
    }
  }
}
