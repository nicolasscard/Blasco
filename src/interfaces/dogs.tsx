// Generated by https://quicktype.io

export interface Breed {
    weight:             Eight;
    height:             Eight;
    id:                 number;
    name:               string;
    bred_for?:          string;
    breed_group?:       BreedGroup;
    life_span:          string;
    temperament?:       string;
    origin?:            string;
    reference_image_id: string;
    image:              Image;
    country_code?:      CountryCode;
    description?:       string;
    history?:           string;
}

export interface Pet {
    name: string,
    age: number,
    breed: string,
    image: any, // TODO: Add image here
};

export enum BreedGroup {
    Empty = "",
    Herding = "Herding",
    Hound = "Hound",
    Mixed = "Mixed",
    NonSporting = "Non-Sporting",
    Sporting = "Sporting",
    Terrier = "Terrier",
    Toy = "Toy",
    Working = "Working",
}

export enum CountryCode {
    Ag = "AG",
    Au = "AU",
    Us = "US",
}

export interface Eight {
    imperial: string;
    metric:   string;
}

export interface Image {
    id:     string;
    width:  number;
    height: number;
    url:    string;
}
