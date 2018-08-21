---
layout: default
title: Practices- Different Information Models
---

# Different Information Models

In the development of new business application using multi-tiers architecture, multiple technologies such as BPM, BRM, web 2.0, mobile, multiple integrations with existing application, the information model definition and management can dramatically expose the success of the development of this business application. This guideline exposes some best practices on information modeling view.

With new business application using technologies such as BPM, BRM, MDM, Web 2.0 in a SOA context, there is an important need of separating integration from business processes and creating services that could be used across the organization in the context of multiple processes.

The information model for such service has to be designed so there is minimum dependency between consumers and provider. The approach of trying to develop a unique rich information model to support all the different consumers, may lead having the consumers dealing with complex data structure sparsely populated.

One the other extreme a generic model using request / response generic container, may make the service contract very loose but the logic of data validation becomes more complex within the service provider: The schema defining the data exchanged in an operation does not specify the exact list of attributes required as input and returned as output.

This leads to adopt multiple views of the information model, adapted for the scope of the component using it. The following diagram illustrates such approach.
<img src="{{site.url}}/assets/images/sem_sim_rbo.png" alt="Phases" style="width: 90%;"/>  

The persisted information model (in system of records or DB) is different than the process variable in BPM, which different than the rule business object model used to make decision. A good architecture leverages different information model views to carry the data to the different layers of the business application: the graphical user interface, the data base, the service contract, the business process data, the messaging structure, the business rules. There is nothing new in this. BPM and J2EE applications are using this pattern since years.

The Service Exposition Model or Service External Model is used at the service specification level, where the implementation of the service may leverage a more complex model. When integrating to an external application the model is named ASBO, for Application Specific Business Objects.

When defining service specifications it is important to assess if each business entities supported by the service operations is going to have different definitions or if the same definition applies to the whole service portfolio?

The scope of reuse of data types is an important architecture decision; there is no one-size-fits-all solution. However, a few different patterns are emerging in the field:
• One object model per interface: Using an independent data model for every service interface assures the highest level of decoupling between services. As negative, the consumers have to understand different representations of the same business entities across multiple services and have to cope with all the relative data transformations. This strategy can be very effective for coarse-grained service operations that do not exchange large amount of data with consumers.
• One object model per business domain: the service information models are organized in domains, every domain sharing the same data model. The downside is that, once domains are defined, changing their boundaries can be costly.
• A single object model for the whole enterprise: the approach is to define a single common set of data structures shared across all the enterprise service interfaces. The amount of model customization is kept to a minimum and its management is centralized. The negatives are having overly complicated model the consumers need to process.
