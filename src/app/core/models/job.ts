export interface Job {
    [key: string]: {
        Status: string;
        job_belongs_to_company: string;
        Description: string;
        duration_of_use: string;
        type: string;
        Name: string;
       
    }
}
// "Status": "Closed",
// "job_belongs_to_company": "http://www.semanticweb.org/houssem/ontologies/2023/9/untitled-ontology-3#TechNex_Solutions",
// "Description": "Create visual designs for marketing materials",
// "duration_of_use": "Part-time, 20 hours/week",
// "type": "http://www.w3.org/2002/07/owl#NamedIndividual",
// "Name": "Graphic Designer"