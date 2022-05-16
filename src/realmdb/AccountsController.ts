import Realm from 'realm';
import { AlbumSchema,albumDataSchema } from './Albumschema';
import RealmConfig from './RealmConfig';

export const albumConfig = {

    schema:[AlbumSchema,albumDataSchema] ,
    schemaVersion: RealmConfig.schemaVersion,
    migration: () => {},
    };
    
   export function setAlbumData (statement, albumdata) {

       const AlbumData ={statement, albumdata};

        Realm.open(albumConfig).then(realm => {realm.write(() => {

            realm.create('album', AlbumData, true);

            });
        });
    }

   export function getAlbumData  () {
        realm
        .objects('album')
        .toJSON();
    }
 