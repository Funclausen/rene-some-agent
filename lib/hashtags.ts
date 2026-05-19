export interface HashtagCategory {
  id: string;
  name: string;
  tags: string[];
}

export const hashtagCategories: HashtagCategory[] = [
  {
    id: 'lokalt',
    name: 'Favrskov og lokalt',
    tags: ['#favrskov', '#hadsten', '#hinnerup', '#hammel', '#lyngaa', '#favrskovkommune', '#soeften', '#ulstrup', '#laurbjerg']
  },
  {
    id: 'politik',
    name: 'Lokalpolitik',
    tags: ['#lokalpolitik', '#kommunalpolitik', '#byraad', '#dkpol', '#konservative', '#kv25', '#favrskovbyraad']
  },
  {
    id: 'erhverv',
    name: 'Erhverv og vaekst',
    tags: ['#erhverv', '#erhvervsliv', '#erhvervspolitik', '#ivaerksaetteri', '#vaekst', '#dkbiz', '#lokalterhvervsliv']
  },
  {
    id: 'trafik',
    name: 'Trafik og sikkerhed',
    tags: ['#trafiksikkerhed', '#skolevej', '#cykling', '#vejanlaeg', '#tryghed', '#boernesikkerhed']
  },
  {
    id: 'landsby',
    name: 'Landsby og bosaetning',
    tags: ['#landsbyudvikling', '#landsbylivet', '#bosaetning', '#lokalsamfund', '#landdistrikt', '#landsby']
  },
  {
    id: 'frivillighed',
    name: 'Frivillighed og faellesskab',
    tags: ['#frivillighed', '#faellesskab', '#foreningsliv', '#lokaltfaellesskab', '#ildsjaele']
  },
  {
    id: 'kultur',
    name: 'Kultur og fritid',
    tags: ['#kultur', '#fritid', '#sport', '#idraet', '#kulturliv', '#lokalkultur', '#foreninger']
  },
  {
    id: 'boernungeaeldre',
    name: 'Boern, unge og aeldre',
    tags: ['#boernogunge', '#folkeskole', '#aeldrepleje', '#boernefamilier', '#friplejehjem', '#skole', '#ungdom']
  }
];

export function getHashtags(categoryIds: string[]): string[] {
  return hashtagCategories
    .filter((category) => categoryIds.includes(category.id))
    .flatMap((category) => category.tags);
}
