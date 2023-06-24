import axios from 'axios';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';


interface CompanyInfo {
  mission: string;
  vision: string;
  objectives: string;
}



export default function MissionVisionObjectiveSection() {

  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);

  const fetchCompanyInfo = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/company-info/');
      setCompanyInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  return (
    <section>
      {companyInfo? (
        <div className="container three-column-grid">
          <div className="">
            <h3>MISSION</h3>
            <span className="accent-line"></span>
            <p>{companyInfo.mission}</p>
          </div>

          <div className="">
            <h3>VISION</h3>
            <span className="accent-line"></span>
            <p>{companyInfo.vision}</p>
          </div>

          <div className="">
            <h3>OBJECTIVES</h3>
            <span className="accent-line"></span>
            <p>{companyInfo.objectives}</p>
          </div>
        </div>
      ): (
        <div className="spinner">
          <BeatLoader color="#123abc" loading={true} />
          <p>Loading company information . . . . . </p>
        </div>
      )}

    </section>
  );
  
}


