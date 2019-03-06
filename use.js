'use strict';

const styles = {
    success : `color : #fff;
    background-color : #55efc4;
    font-weight : 600;
    font-size : 12px;
    padding :3px;
    border-radius:2px;`,
    warning : `color : #fff;
    background-color : #fdcb6e;
    font-weight : 600;
    padding :3px;
    font-size : 12px;
    border-radius:2px;`,
    info : `color : #fff;
    background-color : #74b9ff;
    font-weight : 600;
    padding :3px;
    font-size : 12px;
    border-radius:2px;`,
    error : `color : #fff;
    background-color : #e74c3c;
    font-weight : 600;
    padding :3px;
    font-size : 12px;
    border-radius:2px;`
}

class UseLogger {
    
    success(data){
        if(!data) {
            console.log('%cSuccess',styles.success);
        } else {
            console.log('%cSuccess',styles.success);
            console.log(data)
        }
    }

    warning(data){
        if(!data) {
            console.log('%cWarning',styles.warning);
        } else {
            console.log('%cWarning',styles.warning);
            console.log(data)
        }
    }

    error(data) {
        if(!data) {
            console.log('%cError',styles.error);
        } else {
            console.log('%cError',styles.error);
            console.log(data)
        }
    }

    info(data) {
        if(!data) {
            console.log('%cInfo',styles.info);
        } else {
            console.log('%cInfo',styles.info);
            console.log(data)
        }
    }

    custom(tag,title,data) {
        switch(tag) {
            case "success" : {
                console.log(`%c${title}`,styles[tag]);
                if(data) {
                    console.log(data);
                    return;
                } else {
                    return;
                }
            }
            case "warning" : {
                console.log(`%c${title}`,styles[tag]);
                if(data) {
                    console.log(data);
                    return;
                } else {
                    return;
                }
            }
            case "info" : {
                console.log(`%c${title}`,styles[tag]);
                if(data) {
                    console.log(data);
                    return;
                } else {
                    return;
                }
            }
            case "error" : {
                console.log(`%c${title}`,styles[tag]);
                if(data) {
                    console.log(data);
                    return;
                } else {
                    return;
                }
            }
            default : {
                throw new Error('Please choose a tag between "success,warning,error,info"');
            }
        }
    }
}

export default new UseLogger();
