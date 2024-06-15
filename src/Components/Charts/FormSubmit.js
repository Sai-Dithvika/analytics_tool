import axios from 'axios';

const mapper=(data)=>{
    const labels = [];
    const seriesData = {
      form_submit: [],
      form_start: []
    };
  
    const dataMap = {};
  
    for (const item of data) {
      const pagePath = item.label1;
      const eventType = item.label2;
      const value = parseInt(item.value1);
  
      if (!dataMap[pagePath]) {
        dataMap[pagePath] = { form_submit: 0, form_start: 0 };
        labels.push(pagePath);
      }
  
      if (eventType === 'form_submit') {
        dataMap[pagePath].form_submit += value;
      } else if (eventType === 'form_start') {
        dataMap[pagePath].form_start += value;
      }
    }
  
    for (const label of labels) {
      seriesData.form_submit.push(dataMap[label].form_submit);
      seriesData.form_start.push(dataMap[label].form_start);
    }
  
    console.log('Mapped Data:', { labels, seriesData });
  
    return {labels,seriesData};
}

const FormSubmit=async ()=>{
    const response=await axios.post(`${process.env.REACT_APP_BACKEND}/analytics/report`,
        
            {
                "dimensions": [
                  "pagePath",
                  "eventName"
                ],
                "metrics": [
                  "totalUsers"
                ],
                "dateRanges": [
                  [
                    "2024-06-01",
                    "today"
                  ]
                ],
                "dimensionFilter": [
                  {
                    "fieldName": "eventName",
                    "filters": ["form_submit", "form_start"]
                  }
                ]
              }

        
    )
    return mapper(response.data.data);

}

export default FormSubmit;