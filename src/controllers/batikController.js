const batikService = require('../services/batikService');
const axios = require('axios');

const getAllBatiks = async (req, res) => {
  try {
    const batiks = await batikService.getAllBatiks();
    res.json(batiks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch batiks' });
  }
};

const getBatikById = async (req, res) => {
  try {
    const batik = await batikService.getBatikById(req.params.id);
    if (!batik) {
      return res.status(404).json({ error: 'Batik not found' });
    }
    res.json(batik);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch batik details' });
  }
};

const getDetailAfterPredict = async (req, res) => {
  try {
    const batik = await batikService.getBatikByName(req.params.name);
    if (!batik) {
      return res.status(404).json({ error: 'Batik not found' });
    }
    res.json(batik);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch batik details' });
  }
};

module.exports = {
  getAllBatiks,
  getBatikById,
  getDetailAfterPredict,
};