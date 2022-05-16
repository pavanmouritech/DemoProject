
  export const AlbumSchema = {
    name: "album",
    properties: {
      albumData:'albumDataSchema[]'
    },
    primaryKey: "albums",
  };
  export const albumDataSchema = {
      name:'albumObject',
      properties:{
        id: "int",
        title: "string",
        url: "string",
      }
  }
  