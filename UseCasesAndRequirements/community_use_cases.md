# Linked Building Data Use Cases

Vast amounts of heterogeneous data are generated and used during the life cycle of a building. An example is product data, which describes the building and the elements that make up the building. This includes the geometric models for each product. Examples of (building) products include walls, windows, pipes, ducts, light switches, sensors and other devices. With these data as a basis, and through their connection to more fine-grained data, such as sensor measurements data, usage data, intelligent domotic system data, geographical data and weather data, highly advanced services can be supplied over the Web to various end users.

From an industrial point of view, using Linked Data technologies and adopting common Knowledge Graph models is essential to exploiting building data on the web for a range of important use cases, including those related to indoor navigation (e.g. shop navigation, evacuation and disaster, etc.), energy efficiency simulation (e.g. retrofitting, behavioural change, etc.), web-based facility management, and many more. Here we list use cases being addressed directly by the LBD community group.

## Building Geometry Data on the Web

Geometry plays a central role in supporting these use cases. A key challenge is the seamless integration of multiple geometric models<sup>[[1]](#ftnt1)</sup>. The Semantic Web approach enables several geometries to exist side by side on the web coming from different sources or workflows and applied in a variety of construction-related tasks<sup>[[2]](#ftnt2)</sup>. Here we present three high level use cases:

### Use Case 1: Varied representation of building geometric data within the BIM domain

In Building Information Modeling (BIM), authoring tool designers are able to create a digital model consisting of objects that represent building elements, rooms and abstract things like mechanical systems. It is further possible to describe relationships between these objects and attach attributes to them. The main selling point of BIM has, however, been the ability to represent objects with parametric 3D geometry. Since BIM authoring tools operate on proprietary data models, however, interoperability is limited to file based exchanges of a final model that can then be referenced into 3rd party tools used by other stakeholders of a project.

With Linked Data, the references can be described at object level and, hence, it is possible to extend the definition of an object in another stakeholder’s model. The model of the building owner could consist only of functional requirements for the building. A second model of the architect contains the building geometry and in-between building elements, zones are formed. These zones need to fulfil the functional requirements described by the building owner. A third model of the structural engineer only references the locations of load-carrying columns, walls and slabs, and specifies the structural requirements for those. A fourth model for energy simulation specifies thermal requirements etc. For this to work, it is necessary to have a formal way of representing geometry and relationships between the different coordinate systems.

### Case study - Heritage data

During built heritage projects (e.g. restoration, maintenance, historical research) a large amount of stakeholders collaborate. Each stakeholder assembles and generates a wide variety of data, including 2D and 3D geometries ranging from survey geometry (e.g. a point cloud or complex mesh), over 2D plans and maps (historical situation, previous restorations, derived from survey data, etc.) to volumetric 3D models. These geometries are used to get an overview of the historical and existing situation of the building, for communicating the location of damages or valuable historical elements in the building or to express the intention of the restoration design. Because of the wide variety of geometric data, a large amount of common geometry schemas (text-based and binary, open and proprietary) are currently used in practice. Instead of developing RDF-based geometry schemas for each specific case, alternative methods such as the application of RDF literals to embed geometry descriptions (~ GeoSPARQL 1.0) or to reference external geometry files are considered. In that case, the usage of existing geometry schemas and their tools can be continued. Built heritage stakeholders need to be able to link such geometry descriptions to building elements, damages and building spaces they describe. Each described object can have multiple geometry descriptions (different geometry schema, describing an object at multiple moments in time, different amount of detailing/resolution, etc.), potentially coming from different stakeholders. Geometry metadata (accuracy, author, resolution, derived geometry descriptions, file size, etc.) is necessary to reuse the geometry in a collaborative setting as it gives an indication of the geometry provenance. Other metadata (used geometry schema, coordinate system, etc.) might help users in the automatic processing of the data by their geometry applications. Three domain independent ontology modules have been developed in previous collaborative research and are applied in a built heritage PhD research project named “Flemish Cities in Transition”<sup>[[3]](#ftnt3)</sup>.

Relevant data standards: Ontology for Managing Geometry<sup>[[4]](#ftnt4)</sup> (OMG - [https://w3id.org/omg#](https://www.google.com/url?q=https://w3id.org/omg%23&sa=D&ust=1583233572175000)), the File Ontology for Geometry formats<sup>[[5]](#ftnt5)</sup> (FOG - [https://w3id.org/fog#](https://www.google.com/url?q=https://w3id.org/fog%23&sa=D&ust=1583233572176000)) and the Geometry Metadata Ontology (GOM - [https://w3id.org/gom#](https://www.google.com/url?q=https://w3id.org/gom%23&sa=D&ust=1583233572176000)).

### Case study - Product descriptions

With the heterogeneous environment of the construction sector, providing suitable product descriptions for any use case and software application is hard to achieve. While open source exchange formats, i.e. IFC and STEP, can be used to describe products in a uniform manner to realise a communication across domains, the amount of required geometric detail is not addressed. For example, lights to indicate emergency exits are needed in different geometric detail. The electrical engineer only needs to know the position of the lighting fixture, whereas the architect requires the bounding box to consider for the design and safety engineers want to know the material, colour and shape of the lighting fixture to ensure that is clearly visible. On the other hand, the manufacturer needs to model the product in its highest geometrical detail for their own production chain. If the manufacturer provides the highest geometrical detail, the product description will become too large to be handled if multiple instances are places within the model. Hence, the geometrical detail needs to be broken down, ideally individually in respective of singular use cases, resulting in multiple geometry descriptions for the same object. By applying Linked Data, the attachment of multiple geometry descriptions to a singular object can be realised easily, maintaining means to differentiate between the descriptions and identify singular ones to connect them to their respective use cases. Yet, if the original geometry description changes, the derived geometry descriptions must be identified and updated, as well.

### Use Case 2: Data integration between building data and geospatial

Geometric data plays a central role in the geospatial domain, architectural design and construction industry. For upcoming, new approaches on how to store building data, such as the Semantic Web, however, no universal common agreement exists on the combination of geometric and non-geometric data. Thus, it can be unclear to users on how to represent their geometries, leading to a decelerated application and advancement of making building data available over the web. This gap can only be bridged if a common approach on the representation of geometries on the web is achieved.

## Geospatial data integration with building data in Ireland

In Ireland, the Ordnance Survey Ireland (OSi) has a substantial dataset (over 50 million objects), called Prime2, which includes not only GIS data (polygon footprint, geodetic coordinate), but also additional building-specific data (form and function). The ADAPT research centre working with the Ordnance Survey Ireland has begun publication of their geospatial data using GeoSPARQL<sup>[[6]](#ftnt6)</sup>, with a subset of their buildings data (building name, geolocation, and form and function) in the county of Galway now being available as RDF<sup>[[7]](#ftnt7)</sup>. This provides authoritative URIs for Irish buildings which can be used to interlink building data from other domains, such as products, sensors, energy, etc. The potential also exists to support the conversion of their 2D building footprints into a simple 3D geometric model, given some additional properties (height). An existing schema such as the Industry Foundation Classes, and ifcOWL serialization can be supported, but tend to be overly verbose (use of lists for each vertex in a point for example) and geometric and non-geometric data are overly entwined. The possibility to define 3D geometries using less complex geometry schemas would be a huge advantage within the building information modelling domain. This is an important step towards the iterative integration of ever more complex BIM models which can support a range of different use cases into the wider web of data.

Relevant data standards: BOT, ifcOWL, GeoSPARQL

Open data sets: [http://data.geohive.ie/downloadAndQuery.html](https://www.google.com/url?q=http://data.geohive.ie/downloadAndQuery.html&sa=D&ust=1583233572179000) 

### Use Case 3: Managing provenance in building data

During the design stages of a construction project, the building’s design changes quite rapidly, and often there are derived consequences of these changes. The cooling demand of a zone is dependent on the solar heat gain through windows and if the windows change, so does the cooling demand. This affects the capacity requirement of the fan coil in the room and potentially the size of the pipes supplying this fan coil, the pump circulating the cooling water and the size of the chiller. The danish consulting engineering company Niras uses Linked Data to model these interdependencies. The architect’s BIM model is parsed to a knowledge graph described with the Building Topology Ontology (BOT) and the Ontology for Property Management (OPM) is used to capture each state/version of geometrically derived properties as the design changes. Small task specific web applications access and extend the knowledge graph through SPARQL queries and uses OPM to relate a derived property to the properties that will affect it. In the current setup, 2D-geometry is extracted as WKT literals and 3D-geometry as OBJ literals. Geometry changes are registered by string comparison. In the UI, the state of the model geometry at the beginning and end of a given time interval is visualised.

## Building Navigation and Accessibility

### Use Case 1: Inferring on walking path

Finding the shortest walking path from point A to point B in a building. Finding each circulation element on the way. Circulation elements : spaces, stairs, elevators, corridors, spaces, doors, opening, ramps.

Relevant data standards: ifcOWL

### Use Case 2: Calculating widths of corridors with complexe shapes

Corridors can have multiple aisles (even atriums) with different widths. How to divide it into part with specific width.

Relevant data standards: gbXML

## Building Energy

Use Case 1: Calculating transfer surfaces

Calculating transfer surfaces from space to space (or zone) through walls for energy performance calculation.

Relevant data standards: ifcOWL

## Building Products

### Use Case 1: Separating BIM product from BIM project descriptions

Current BIM models are stored in proprietary formats, such as those of Revit, iTWO, ArchiCAD. With a software-independent data storage, one window description could be used for many project descriptions. For this purpose, IFC is not sufficient due to the lack of equation-based geometry descriptions. More information can be found here - [https://github.com/projekt-scope/scope-data-service](https://www.google.com/url?q=https://github.com/projekt-scope/scope-data-service&sa=D&ust=1583233572181000)

Relevant data standards: BOT, OCC, OOP, ifcOWL, OPS

## Buildings and Infrastructure

In the Netherlands, based on an extensive ontology we created a fully operational data infrastructure where municipalities store, use and analyse their asset data in commercially available software applications. Data exchange from these asset management applications conform our national standard (in RDF/RDFS/OWL2/Turtle) leads to neutral linked datasets in a triplestore on a national data platform, where validation (against predefined conformance classes), conversion to various data formats (XML, GML, WFS, CVS, Geopackage), a GIS viewer, open publication and a SPARQL endpoint serve all kinds of uses of the data.

Relevant data standards: GWSW ontologie

*   https://apps.gwsw.nl

Open data sets:

*   SPARQL endpoint - https://sparql.gwsw.nl, but also at our national geo-information platform
*   https://www.pdok.nl/introductie/-/article/stedelijk-water-riolering- (all in Dutch, sorry!)


## Building Renovation

During building renovation projects large amounts of heterogeneous data are exchanged between the different applications involved in the process (IFC files generated by Scan to BIM apps, Workflows created by Management tools, and so forth). Even though IFC files can be used to exchange core building-related data such as building elements or geometric information, they cannot capture complementary information that could bring additional functionalities to the applications used in the renovation process. With an ontology working as the central interoperability framework for all these tools, we can capture information from different domains, interconnect them, and facilitate the following applications:

### Use Case 1: Rapid scanning of the geometry of the building, semantic modeling, and accurate representation in a BIM

In the BIMERR research project, the aim is to provide a set of tools to support renovation projects in the design and construction phase. The integration of all these heterogeneous applications is being addressed by a semantic layer which is based on ontologies.

During the inspection stage of the buildings, surveyors shall be able to rapidly capture information about the building geometry in order for BIM modelers to significantly accelerate the creation of accurate and semantically-rich building models. These models must contain all necessary information for the design team (architects, engineers) to proceed with the design of the energy renovation project. Finally, a semantic enrichment process of the BIM model generated by Scan to BIM tools is carried out by assigning materials and properties to the building elements, obtaining a more accurate representation of the building. After some postprocessing, the model is sent to the BIMERR Interoperability Framework for its storage and instantiation of the building data model, which contains main topological elements (Stories, apartments, spaces, etc.) and the relations between them.

Related Deliverables: 2.3 BOT - Building Topology Ontology

### Use Case 2: Collection of data about the building systems through BIM-based internal audit support tools and interaction with building managers and occupants.

This use case is being developed in the context of the BIMERR research project. Accelerate the collection of data about the building systems through BIM-based audit support tools. By means of mobile application and AR-glasses, both occupants or workers can directly link annotations or issues to the different topological elements of the building (stories, spaces, etc), that can be sent to other applications for their analysis. This information is really critical for a renovation project since it will provide valuable input to workers towards safely and properly performing the renovation works and avoiding either incidents/ damages to the backbone infrastructure of the building or accidents caused (by drilling a gas pipe or cutting an electricity line cable).

Related Deliverables: 2.3 BOT - Building Topology Ontology


### Use Case 3: Adapt design to the actual building use, including accurate information about occupancy and schedules, comfort requirements/ preferences and energy uses

This use case is being developed in the BIMERR research project. Beyond the static components of a building that can be extracted and modeled by tools using visual information, renovation for energy efficiency also requires detailed information about the energy consumption of the building – and more importantly, information to understand why and how energy is consumed, so that accurate post-renovation consumption projections can be made. The enrichment of the building model with more accurate information about occupancy and schedules, comfort requirements/ preferences, and energy uses, will allow the adaptation of the design to the actual building use.
Related Deliverables: 2.3 BOT - Building Topology Ontology


### Use Case 4: Stakeholders’ systems exchange appropriate and “understandable” data between each other.

This use case is being developed in the BIMERR research project. Typically, once the executive design is completed, the project management team provides all the information (drawings, site investigations, time plan, etc.) to local authorities in order to acquire the building permit for the project. Once the permit is granted, this information is transformed into the tender offer, upon which the subcontractors will provide their quote for undertaking the works. Vendors will also provide their quotes for services/materials based on the same information. During the actual renovation phase, the above-mentioned information pack is transformed into engineering drawings and passed to the site manager and foreman who in turn has to communicate the information to the working crews.

Related Deliverables: 2.3 BOT - Building Topology Ontology


* * *

<div>

[[1]](#ftnt_ref1) McGlinn, K. Wagner, A. Pauwels, P. Bonsma, P. Kelly, P. O’Sullivan, D. (2019). Interlinking geospatial and building geometry with existing and developing standards on the web. In Automation in Construction, Volume 103, 2019, Pages 235-250, ISSN 0926-5805, https://doi.org/10.1016/j.autcon.2018.12.026.

</div>

<div>

[[2]](#ftnt_ref2) Wagner A, Bonduel M, Pauwels P and Rüppel U (2019). Relating geometry descriptions to its derivatives on the web. In Proceedings of the 2019 European Conference for Computing in Construction (O'Donnell J, Chassiakos A, Rovas D and Hall D, eds), University College Dublin, Chania, Greece, Pages 304–313, [https://doi.org/10.35490/EC3.2019.146](https://www.google.com/url?q=https://doi.org/10.35490/EC3.2019.146&sa=D&ust=1583233572183000).

</div>

<div>

[[3]](#ftnt_ref3) [https://www.researchgate.net/project/Flemish-Cities-in-Transition-A-Framework-for-a-Web-based-Built-Heritage-Platform-Using-BIM-GIS-and-Linked-Data](https://www.google.com/url?q=https://www.researchgate.net/project/Flemish-Cities-in-Transition-A-Framework-for-a-Web-based-Built-Heritage-Platform-Using-BIM-GIS-and-Linked-Data&sa=D&ust=1583233572185000)

</div>

<div>

[[4]](#ftnt_ref4) Wagner A, Bonduel M, Pauwels P and Rüppel U (2019). Relating geometry descriptions to its derivatives on the web. In Proceedings of the 2019 European Conference for Computing in Construction (O'Donnell J, Chassiakos A, Rovas D and Hall D, eds), University College Dublin, Chania, Greece, Pages 304–313, [https://doi.org/10.35490/EC3.2019.146](https://www.google.com/url?q=https://doi.org/10.35490/EC3.2019.146&sa=D&ust=1583233572184000).

</div>

<div>

[[5]](#ftnt_ref5) Bonduel M, Wagner A, Pauwels P, Vergauwen M and Klein R (2019). Including widespread geometry formats in semantic graphs using RDF literals. In Proceedings of the 2019 European Conference for Computing in Construction (O'Donnell J, Chassiakos A, Rovas D and Hall D, eds), University College Dublin, Chania, Greece, Pages 341–350, [https://doi.org/10.35490/EC3.2019.166](https://www.google.com/url?q=https://doi.org/10.35490/EC3.2019.166&sa=D&ust=1583233572185000).

</div>

<div>

[[6]](#ftnt_ref6) McGlinn, K. Debruyne, C; McNerney, L. O’Sullivan, D. (2017). Integrating Ireland’s Geospatial Information to Provide Authoritative Building Information Models. In SEMANTiCS 2017, the 13th International Conference on Semantic Systems. Held in Amsterdam, Netherlands.

</div>

<div>

</div>
