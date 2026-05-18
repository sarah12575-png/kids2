export default function handler(req, res) {
  res.status(200).json({
    appName: "National Children's Play Facility Tracker",
    dataSource: "Ministry of the Interior and Safety",
    status: "Service Operational",
    lastUpdated: new Date().toISOString()
  });
}
