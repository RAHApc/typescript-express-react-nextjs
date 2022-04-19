import IRepository from "../../../components/contracts/IRepository";
import IPayment from "../model/IPayment";
import PaymentStatus from "../model/PaymentStatus";

export default interface IPaymentRepository extends IRepository<IPayment>{
    findByReserve(reserve: string): Promise<IPayment | null>
}