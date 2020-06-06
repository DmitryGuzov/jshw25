import { Controller, Get, Body, Param, Post, Query } from "@nestjs/common";

const allUsers =  [ { id: 32, name: '1'},{ id: 33, name: '2'}, { id: 34, name: '3'}];

@Controller('users')
export class UserController {

    @Get(':id')
    getData(@Param('id') param: number){        
        if(param == 32 || param == 33 || param == 34){
            return allUsers.find(el=> el.id == param);            
        }            
        else {return `Uncorrect id -> ${param}! Please enter(32-34)`}
    }

    @Get('')
    getFrom(@Query() query){
        const res = [];
        for(let i=query.from;i<=query.to;i++){
            const user = allUsers.find(el=> el.id == i);
            res.push(user);
        }
        return res;
    }

    @Post('add')
    add(@Body() body: any){
        allUsers.push(body);
        return allUsers;
    }
}

// 1) создать проект,
// 2) добавить обьект константу const allUsers =
//  [ { id: 32, name: '1'},{ id: 33, name: '2'}, { id: 34, name: '3'}];
// 3)добавить один модуль и туда роут который будет сответствовать такому 
// адресу GET /users/(число 32- 34), вытаскивать это число и возвращать юзера по id
// брать число
// 4) добавить еще роут POST /users/add , пример Body { id: 36, name '36'},
//  и пошит это бади в allUsers
// 5) добавить еще роут Get /users?from=(любое число которое соответсвует
//  id с allUsers )&to=(аналогично), и возвращаем рендж юзеров по from, to