export class Param {
    query: Query;
    preset: string;
  }

export class Query {
    value:string;
    fields:string[]
    operator:string;
}
  
export class Disaster{
    longitude:string;
    latitude:string;
    country;
    state;
    postalCode;
    title:string;
    description:string;
    id:string;
    typeName:string;
}

export class Charity{
    tagLine:string
	charityName:string
	websiteURL:string
	accountabilityRatingscore:string
	accountabilityRatingrating:string
}

export class Report {
    title
    origin
    body
}