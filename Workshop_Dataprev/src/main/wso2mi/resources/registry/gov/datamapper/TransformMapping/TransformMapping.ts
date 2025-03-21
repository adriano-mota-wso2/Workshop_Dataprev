import * as dmUtils from "./dm-utils";

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
ID: string
name: string
city: string
code: string
country: string
sendNotificationEmail: string
convertedStatus: string
doNotCreateOpportunity: string
opportunityName: string
overwriteLeadSource: string
sessionId: string
}


/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
owner: {
ID: string
name: string
city: string
code: string
country: string
}
lead: {
ID: string
name: string
city: string
code: string
country: string
}
sendNotificationEmail: string
convertedStatus: string
doNotCreateOpportunity: string
opportunityName: string
overwriteLeadSource: string
sessionId: string
}


/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        owner: {
            ID: input.ID,
            name: input.name,
            city: input.city,
            code: input.code,
            country: input.country
        },
        lead: {
            ID: input.ID,
            name: input.name,
            city: input.city,
            code: input.code,
            country: input.country
        },
        sendNotificationEmail: input.sendNotificationEmail,
        convertedStatus: input.convertedStatus,
        doNotCreateOpportunity: input.doNotCreateOpportunity,
        opportunityName: input.opportunityName,
        overwriteLeadSource: input.overwriteLeadSource,
        sessionId: input.sessionId
    };
}

