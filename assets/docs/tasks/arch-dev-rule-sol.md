# Develop Architecture for the Rule Application

The purpose of the architecture task is to support the following major items:
* Support the Non-Functional requirements specified for the business application
* Integrate the Rule Engine into the business application
* Deploy Business Rules Management System into the business and IT organizations.

<div class="row">
   <div class="col-md-3">
     <h3 class="underline">Input</h3>
     <ul>
       <li>Requirements</li>
       <li>Non-Functional Requirements</li>
       <li>Architecture Decisions</li>
     </ul>
   </div>
   <div class="col-md-6" style="border:1px solid black;">
     <h3>Task</h3>
     The architect has to address as early as possible the following subjects:
     <ul>
       <li>Integrate the Rule Engine into the business application using a service oriented design to facilitate reusability and scalability. If an embedded solution is the choice for accessing the BRE, the design should address the engine integration at the API level.
       <p>The Rule Engine as an executable class, callable using proprietary API or the JSR94 API (which is no more used). Rule Engine can be an embedded component or deployed within a pool as reusable components. Java Connector Architecture can be a solution to manage a pool of Rule Engines. JCA implementation offers a set of services which any deployed adapters can leverage: such as security and transaction propagation.</p>
       </li>
       <li>Deploy Business Rules Management System into the business and IT organizations. This includes the deployment of the Rule Developer IDE and Rule Analyst web based component into the IT architecture. It also addresses the design of the change management processes to apply within the tools.</li>
       <li>Address data models or Rule Business Object Model:</li>
          <ul>
            <li>What is the service exposition model exposed as part of the decision service?</li>
            <li>Where the data are coming from?</li>
            <li>How the consumers of the service could send all those data needed for rule processing?</li>
          </ul>
       <li>Assess the continuous deployment of the ruleset: The Rule Set(s): As script file, it needs to be managed and deployed dynamically and can follow a specific life cycle. It can be also packaged as a jar and available after the system startup, or hot deployed using JMX or RESTful API.
       </li>
       <li>Define the development practice to do continuous integration and devops, Specifically source code control, build server and deployment process involving both developers and business users.</li>
       <li>Define testing strategy to support continuous functional testing of the rule set and develop non-regression test suites to get confident of rule chamges.</li>
    </ul>
 </div>
 <div class="col-md-3">
   <h3>Output</h3>
   <ul>
   <li>Architecture Document</li>
   </ul>
 </div>
</div>
<div class="row">
<div class="col-md-6">
  <h3>Steps</h3>
  <ul>
  <li>Analyze business and technical requirements </li>
<li>Design the decision service interface  </li>
<li>Implement the interface with POJO / EJB or .Net classes</li>  
<li>Add the connection code to the rule engine  </li>
<li>Design the control parameters to add to the context of the rule execution </li>
<li>Design the transaction propagation  </li>
<li>Design the exception reporting  </li>
<li>Assess Performance</li>
  </ul>
</div>
<div class="col-md-6">
  <h3>Best Practices</h3>
  <ul>
  <li><a href="#/bestpractices#datamodel">Different Data Models</a></li>
  </ul>
</div>
</div>
