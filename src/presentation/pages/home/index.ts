import { Log } from '@/domain/protocols';

export class Home{
    constructor(private readonly logger:Log) {
    }

    render(){
        this.logger.event("action",{
            data: JSON.stringify({user:{id:123,name:'Matheus Sunderhus'}})
        })
    }
}