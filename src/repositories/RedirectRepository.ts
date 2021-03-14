import { EntityRepository, Repository } from "typeorm";
import { Redirect } from "../models/Redirect";

@EntityRepository(Redirect)
class RedirectRepository extends Repository<Redirect> {}
export { RedirectRepository }