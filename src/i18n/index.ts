import en from './en.json';
import pt from './pt.json';

type translationData = {
  [key: string]: string;
};

type translationsData = {
  [key: string]: translationData;
};

const translations: translationsData = { en, pt };

export default translations;
