// Importing modules
const Express = require('express');
const BodyParser = require('body-parser');

// Importing routes
const CustomersRoutes = require('./routes/customersRoutes');
const LocationsRoutes = require('./routes/locationsRoutes');
const PrioritiesRoutes = require('./routes/prioritiesRoutes');
const TicketsRoutes = require('./routes/ticketsRoutes');
const TicketStatusesRoutes = require('./routes/ticketStatusesRoutes');
const TicketUpdatesRoutes = require('./routes/ticketUpdatesRoutes');
const UsersRoutes = require('./routes/usersRoutes');

// Building express app
const App = Express();

// Adding middleware
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());

// Building routes
App.use('/api/customers', CustomersRoutes);
App.use('/api/locations', Routes);
App.use('/api/priorities', PrioritiesRoutes);
App.use('/api/tickets', TicketsRoutes);
App.use('/api/ticketStatuses', TicketStatusesRoutes);
App.use('/api/ticketUpdates', TicketUpdatesRoutes);
App.use('/api/users', UsersRoutes);