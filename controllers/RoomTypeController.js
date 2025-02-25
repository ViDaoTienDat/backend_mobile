'use strict';

const RoomTypeData = require('../data/RoomType');
const config = require('../config');

const getRoomTypeList = async (req, res, next) => {
    try {
        const roomType_rs = await RoomTypeData.getRoomTypeList();

        //
        console.log("GET - " + config.url + "/api/roomType")
        res.send(roomType_rs);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getRoomTypeById = async (req, res, next) => {
    try {
        // host/api/roomType?id=roomType_id
        const roomType_id = req.query.id;
        const roomType_rs = await RoomTypeData.getRoomTypeById(roomType_id);

        //
        console.log("GET - " + config.url + "/api/roomType?id=" + roomType_id)
        res.send(roomType_rs);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const addRoomType = async (req, res, next) => {
    try {
        const data = req.body;
        const roomType_rs = await RoomTypeData.createRoomType(data)

        //
        console.log("POST - " + config.url + "/api/roomType")
        res.send(roomType_rs);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const updateRoomType = async (req, res, next) => {
    try {
        const roomType_id = req.query.id;
        const data = req.body;
        const roomType_rs = await RoomTypeData.updateRoomType(roomType_id, data)

        //
        console.log("PUT - " + config.url + "/api/roomType?id=" + roomType_id)
        res.send(roomType_rs);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const deleteRoomType = async (req, res, next) => {
    try {
        const roomType_id = req.query.id;
        const roomType_rs = await RoomTypeData.deleteRoomType(roomType_id)

        //
        console.log("DELETE - " + config.url + "/api/roomType?id=" + roomType_id)
        res.send(roomType_rs);
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = {
    getRoomTypeList,
    getRoomTypeById,
    addRoomType,
    updateRoomType,
    deleteRoomType
}