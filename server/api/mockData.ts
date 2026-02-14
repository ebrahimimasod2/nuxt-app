export default defineEventHandler(async (event) => {
  const startups = [
    {
      id: 1,
      name: "TehranPay",
      sector: "Fintech",
      stage: "Series A",
      funding: "$2.5M",
      description: "Digital payment solutions for Iranian businesses",
      location: "Tehran"
    },
    {
      id: 2,
      name: "PersianLogistics",
      sector: "Logistics",
      stage: "Seed",
      funding: "$800K",
      description: "Last-mile delivery optimization platform",
      location: "Isfahan"
    },
    {
      id: 3,
      name: "MedTech Iran",
      sector: "Healthcare",
      stage: "Pre-seed",
      funding: "$300K",
      description: "Telemedicine platform for rural areas",
      location: "Shiraz"
    },
    {
      id: 4,
      name: "EduPersian",
      sector: "EdTech",
      stage: "Series A",
      funding: "$1.8M",
      description: "Online learning platform for Persian language",
      location: "Tehran"
    },
    {
      id: 5,
      name: "GreenTech Persia",
      sector: "CleanTech",
      stage: "Seed",
      funding: "$1.2M",
      description: "Solar energy solutions for residential buildings",
      location: "Mashhad"
    }
  ]

  return {
    startups,
    totalCount: startups.length,
    lastUpdated: new Date().toISOString()
  }
})