import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAduanFormAduanForm extends Schema.CollectionType {
  collectionName: 'aduan_forms';
  info: {
    singularName: 'aduan-form';
    pluralName: 'aduan-forms';
    displayName: 'AduanForm';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    jenis_aduan: Attribute.String;
    tarikh_kejadian: Attribute.String;
    masa_kejadian: Attribute.String;
    tajuk_aduan: Attribute.String;
    butiran_lanjut: Attribute.String;
    documents: Attribute.Media;
    negeri: Attribute.String;
    lokasi: Attribute.String;
    no_tel_yang_gagal_dihubungi: Attribute.String;
    nama_staff_bertugas: Attribute.String;
    nama_penuh_pasangan: Attribute.String;
    no_kad_pasangan: Attribute.String;
    nama_penuh: Attribute.String;
    no_kad_pengenalan: Attribute.String;
    no_telefon: Attribute.String;
    e_mel: Attribute.String;
    jantina: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::aduan-form.aduan-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::aduan-form.aduan-form',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBulletinPostBulletinPost extends Schema.CollectionType {
  collectionName: 'bulletin_posts';
  info: {
    singularName: 'bulletin-post';
    pluralName: 'bulletin-posts';
    displayName: 'bulletinPost';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    TileImage: Attribute.Media;
    Date: Attribute.Date;
    Information: Attribute.Text;
    PostImages: Attribute.Media;
    NewsArticleWebsiteLink: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bulletin-post.bulletin-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bulletin-post.bulletin-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeScreenMediaLibraryHomeScreenMediaLibrary
  extends Schema.CollectionType {
  collectionName: 'home_screen_media_libraries';
  info: {
    singularName: 'home-screen-media-library';
    pluralName: 'home-screen-media-libraries';
    displayName: 'HomeScreenMediaLibrary';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    Subtitle: Attribute.String;
    Content: Attribute.Media;
    Link: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-screen-media-library.home-screen-media-library',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-screen-media-library.home-screen-media-library',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiJohorLokasiJohor extends Schema.CollectionType {
  collectionName: 'lokasi_johors';
  info: {
    singularName: 'lokasi-johor';
    pluralName: 'lokasi-johors';
    displayName: 'LokasiJohor';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-johor.lokasi-johor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-johor.lokasi-johor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiKedahLokasiKedah extends Schema.CollectionType {
  collectionName: 'lokasi_kedahs';
  info: {
    singularName: 'lokasi-kedah';
    pluralName: 'lokasi-kedahs';
    displayName: 'LokasiKedah';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-kedah.lokasi-kedah',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-kedah.lokasi-kedah',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiKelantanLokasiKelantan extends Schema.CollectionType {
  collectionName: 'lokasi_kelantans';
  info: {
    singularName: 'lokasi-kelantan';
    pluralName: 'lokasi-kelantans';
    displayName: 'LokasiKelantan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-kelantan.lokasi-kelantan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-kelantan.lokasi-kelantan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiMelakaLokasiMelaka extends Schema.CollectionType {
  collectionName: 'lokasi_melakas';
  info: {
    singularName: 'lokasi-melaka';
    pluralName: 'lokasi-melakas';
    displayName: 'LokasiMelaka';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-melaka.lokasi-melaka',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-melaka.lokasi-melaka',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiNegeriSembilanLokasiNegeriSembilan
  extends Schema.CollectionType {
  collectionName: 'lokasi_negeri_sembilans';
  info: {
    singularName: 'lokasi-negeri-sembilan';
    pluralName: 'lokasi-negeri-sembilans';
    displayName: 'LokasiNegeriSembilan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-negeri-sembilan.lokasi-negeri-sembilan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-negeri-sembilan.lokasi-negeri-sembilan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiPahangLokasiPahang extends Schema.CollectionType {
  collectionName: 'lokasi_pahangs';
  info: {
    singularName: 'lokasi-pahang';
    pluralName: 'lokasi-pahangs';
    displayName: 'LokasiPahang';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-pahang.lokasi-pahang',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-pahang.lokasi-pahang',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiPerakLokasiPerak extends Schema.CollectionType {
  collectionName: 'lokasi_peraks';
  info: {
    singularName: 'lokasi-perak';
    pluralName: 'lokasi-peraks';
    displayName: 'LokasiPerak';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-perak.lokasi-perak',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-perak.lokasi-perak',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiPerlisLokasiPerlis extends Schema.CollectionType {
  collectionName: 'lokasi_perliss';
  info: {
    singularName: 'lokasi-perlis';
    pluralName: 'lokasi-perliss';
    displayName: 'LokasiPerlis';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-perlis.lokasi-perlis',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-perlis.lokasi-perlis',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiPulauPinangLokasiPulauPinang
  extends Schema.CollectionType {
  collectionName: 'lokasi_pulau_pinangs';
  info: {
    singularName: 'lokasi-pulau-pinang';
    pluralName: 'lokasi-pulau-pinangs';
    displayName: 'LokasiPulauPinang';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-pulau-pinang.lokasi-pulau-pinang',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-pulau-pinang.lokasi-pulau-pinang',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiSabahLokasiSabah extends Schema.CollectionType {
  collectionName: 'lokasi_sabahs';
  info: {
    singularName: 'lokasi-sabah';
    pluralName: 'lokasi-sabahs';
    displayName: 'LokasiSabah';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-sabah.lokasi-sabah',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-sabah.lokasi-sabah',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiSarawakLokasiSarawak extends Schema.CollectionType {
  collectionName: 'lokasi_sarawaks';
  info: {
    singularName: 'lokasi-sarawak';
    pluralName: 'lokasi-sarawaks';
    displayName: 'LokasiSarawak';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-sarawak.lokasi-sarawak',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-sarawak.lokasi-sarawak',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiSelangorLokasiSelangor extends Schema.CollectionType {
  collectionName: 'lokasi_selangors';
  info: {
    singularName: 'lokasi-selangor';
    pluralName: 'lokasi-selangors';
    displayName: 'LokasiSelangor';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-selangor.lokasi-selangor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-selangor.lokasi-selangor',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiTerengganuLokasiTerengganu
  extends Schema.CollectionType {
  collectionName: 'lokasi_terengganus';
  info: {
    singularName: 'lokasi-terengganu';
    pluralName: 'lokasi-terengganus';
    displayName: 'LokasiTerengganu';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-terengganu.lokasi-terengganu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-terengganu.lokasi-terengganu',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiWpKualaLumpurLokasiWpKualaLumpur
  extends Schema.CollectionType {
  collectionName: 'lokasi_wp_kuala_lumpurs';
  info: {
    singularName: 'lokasi-wp-kuala-lumpur';
    pluralName: 'lokasi-wp-kuala-lumpurs';
    displayName: 'LokasiWPKualaLumpur';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-wp-kuala-lumpur.lokasi-wp-kuala-lumpur',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-wp-kuala-lumpur.lokasi-wp-kuala-lumpur',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLokasiWpLabuanLokasiWpLabuan extends Schema.CollectionType {
  collectionName: 'lokasi_wp_labuans';
  info: {
    singularName: 'lokasi-wp-labuan';
    pluralName: 'lokasi-wp-labuans';
    displayName: 'LokasiWPLabuan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    BackgroundImage: Attribute.Media;
    Icon: Attribute.Media;
    LocationAddress: Attribute.String;
    PhoneNo: Attribute.String;
    FaxNo: Attribute.String;
    OperationTime: Attribute.Text;
    LocationURL: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lokasi-wp-labuan.lokasi-wp-labuan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lokasi-wp-labuan.lokasi-wp-labuan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPerkhidmatanPerkhidmatan extends Schema.CollectionType {
  collectionName: 'perkhidmatans';
  info: {
    singularName: 'perkhidmatan';
    pluralName: 'perkhidmatans';
    displayName: 'Perkhidmatan';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ServiceID: Attribute.String;
    Description: Attribute.Text;
    ServiceImage: Attribute.Media;
    Content: Attribute.DynamicZone<
      [
        'lists.green-tick-list-box',
        'gallery.gallery-basic',
        'lists.bullet-point-list',
        'subsections.section',
        'tiles.price-tile1',
        'tiles.image-desc-tile',
        'dropdown.dropdown-normal',
        'gallery.gallery-small',
        'gallery.gallery-with-description',
        'links.link1',
        'tickets.double-ticket',
        'tickets.single-ticket',
        'dropdown.plain-text-dropdown',
        'subsections.section-with-image',
        'tiles.image-price-tile'
      ]
    >;
    ServiceTitle: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::perkhidmatan.perkhidmatan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::perkhidmatan.perkhidmatan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSorotanPostSorotanPost extends Schema.CollectionType {
  collectionName: 'sorotan_posts';
  info: {
    singularName: 'sorotan-post';
    pluralName: 'sorotan-posts';
    displayName: 'SorotanPost';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    TileImage: Attribute.Media;
    Date: Attribute.Date;
    Information: Attribute.Text;
    PostImages: Attribute.Media;
    PosterArticleWebsiteLink: Attribute.String;
    PinPost: Attribute.Boolean;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::sorotan-post.sorotan-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::sorotan-post.sorotan-post',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::aduan-form.aduan-form': ApiAduanFormAduanForm;
      'api::bulletin-post.bulletin-post': ApiBulletinPostBulletinPost;
      'api::home-screen-media-library.home-screen-media-library': ApiHomeScreenMediaLibraryHomeScreenMediaLibrary;
      'api::lokasi-johor.lokasi-johor': ApiLokasiJohorLokasiJohor;
      'api::lokasi-kedah.lokasi-kedah': ApiLokasiKedahLokasiKedah;
      'api::lokasi-kelantan.lokasi-kelantan': ApiLokasiKelantanLokasiKelantan;
      'api::lokasi-melaka.lokasi-melaka': ApiLokasiMelakaLokasiMelaka;
      'api::lokasi-negeri-sembilan.lokasi-negeri-sembilan': ApiLokasiNegeriSembilanLokasiNegeriSembilan;
      'api::lokasi-pahang.lokasi-pahang': ApiLokasiPahangLokasiPahang;
      'api::lokasi-perak.lokasi-perak': ApiLokasiPerakLokasiPerak;
      'api::lokasi-perlis.lokasi-perlis': ApiLokasiPerlisLokasiPerlis;
      'api::lokasi-pulau-pinang.lokasi-pulau-pinang': ApiLokasiPulauPinangLokasiPulauPinang;
      'api::lokasi-sabah.lokasi-sabah': ApiLokasiSabahLokasiSabah;
      'api::lokasi-sarawak.lokasi-sarawak': ApiLokasiSarawakLokasiSarawak;
      'api::lokasi-selangor.lokasi-selangor': ApiLokasiSelangorLokasiSelangor;
      'api::lokasi-terengganu.lokasi-terengganu': ApiLokasiTerengganuLokasiTerengganu;
      'api::lokasi-wp-kuala-lumpur.lokasi-wp-kuala-lumpur': ApiLokasiWpKualaLumpurLokasiWpKualaLumpur;
      'api::lokasi-wp-labuan.lokasi-wp-labuan': ApiLokasiWpLabuanLokasiWpLabuan;
      'api::perkhidmatan.perkhidmatan': ApiPerkhidmatanPerkhidmatan;
      'api::sorotan-post.sorotan-post': ApiSorotanPostSorotanPost;
    }
  }
}
