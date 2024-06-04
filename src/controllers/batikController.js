const batikService = require('../services/batikService');

const getAllBatiks = async (req, res) => {
  try {
    const batiks = await batikService.getAllBatiks();
    res.json(batiks);
  } catch (error) {
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
    res.status(500).json({ error: 'Failed to fetch batik details' });
  }
};

module.exports = {
  getAllBatiks,
  getBatikById,
};