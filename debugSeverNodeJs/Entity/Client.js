/**
 **/
"use strict";

class Client {
    constructor(connection) {
        this._connection = connection;
        this._messageFromClient = [];
        this._frameCalculationMsg = [];
        this._userEntity = null;
    }

    get connection() {
        return this._connection;
    }

    set connection(value) {
        this._connection = value;
    }

    get messageFromClient() {
        return this._messageFromClient;
    }

    set messageFromClient(value) {
        this._messageFromClient = value;
    }

    get frameCalculationMsg() {
        return this._frameCalculationMsg;
    }

    set frameCalculationMsg(value) {
        this._frameCalculationMsg = value;
    }

    get userEntity() {
        return this._userEntity;
    }

    set userEntity(value) {
        this._userEntity = value;
    }
}

module.exports = Client;