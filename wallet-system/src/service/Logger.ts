class SystemLogger{
    info(message: string){
        console.log(message);        
    }
}

export const Logger=new SystemLogger();