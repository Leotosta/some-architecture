import { EnterpriseCostumerCarrier } from './factories/enterprise-costumer-carrier';
import { IndividualCustumerCarrier } from './factories/individual-costumer-carrier';

const enterprisefactory = new EnterpriseCostumerCarrier();
const individualFactory = new IndividualCustumerCarrier();

const enterprise1 = enterprisefactory.createCarrier('fusca', 'joão');
const individual = individualFactory.createCarrier('lamborgini', 'leonardo');

enterprise1.pickup();
individual.pickup();

