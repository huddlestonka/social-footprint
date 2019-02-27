import { User } from './user';

export interface UserResult {
    fullName: string;
    ageRange?: any;
    gender?: any;
    location: string;
    title?: any;
    organization?: any;
    twitter: string;
    linkedin?: any;
    facebook?: any;
    bio: string;
    avatar: string;
    website?: any;
    details: Details;
    dataAddOns: DataAddOn[];
    updated: string;
}

declare module namespace {

    export interface Name {
        given: string;
        family: string;
    }

    export interface Profiles {
    }

    export interface Location {
        label: string;
        city: string;
        region: string;
        regionCode: string;
        country: string;
        countryCode: string;
        formatted: string;
    }

    export interface Topic {
        name: string;
    }

    export interface Details {
        name: Name;
        age?: any;
        gender?: any;
        emails: any[];
        phones: any[];
        profiles: Profiles;
        locations: Location[];
        employment: any[];
        photos: any[];
        education: any[];
        urls: any[];
        interests: any[];
        topics: Topic[];
    }

    export interface DataAddOn {
        id: string;
        name: string;
        enabled: boolean;
        applied: boolean;
        description: string;
        docLink: string;
    }
}

