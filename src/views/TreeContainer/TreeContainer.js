import React from 'react';
import { connect } from 'react-redux';
import { appActionCreator } from './../../actions';
import Tree from './../../components/Tree/Tree';
import { withRouter } from 'react-router-dom';

export class TreeContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tree data={this.props.data}/>
    );
  }

  componentDidMount(){
    this.props.data.length === 0 ? this.props.requestHeirarchy() : '';
  }
}

const mapStateToProps = (state, ownProps) => {
  const data = [
    {
      "id": 1, 
      "name": "Urban Extent", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 1, 
              "indicators": [
                {
                  "id": 299, 
                  "name": "Total"
                }
              ], 
              "name": "Area", 
              "unit": "(sq. km.)"
            }, 
            {
              "id": 2, 
              "indicators": [
                {
                  "id": 300, 
                  "name": "Total"
                }
              ], 
              "name": "Population", 
              "unit": "(thousands)"
            }, 
            {
              "id": 3, 
              "indicators": [
                {
                  "id": 301, 
                  "name": "Total"
                }
              ], 
              "name": "Population density", 
              "unit": "(people per sq. km.)"
            }
          ], 
          "id": 1, 
          "name": "Administrative"
        }, 
        {
          "categories": [
            {
              "id": 4, 
              "indicators": [
                {
                  "id": 302, 
                  "name": "Total"
                }
              ], 
              "name": "Area", 
              "unit": "(sq. km.)"
            }, 
            {
              "id": 5, 
              "indicators": [
                {
                  "id": 303, 
                  "name": "Total"
                }
              ], 
              "name": "Population", 
              "unit": "(thousands)"
            }, 
            {
              "id": 6, 
              "indicators": [
                {
                  "id": 304, 
                  "name": "Total"
                }
              ], 
              "name": "Population density", 
              "unit": "(people per sq. km.)"
            }
          ], 
          "id": 2, 
          "name": "Built up"
        }, 
        {
          "categories": [
            {
              "id": 7, 
              "indicators": [
                {
                  "id": 305, 
                  "name": "Total"
                }
              ], 
              "name": "Area", 
              "unit": "(sq. km.)"
            }, 
            {
              "id": 8, 
              "indicators": [
                {
                  "id": 306, 
                  "name": "Total"
                }
              ], 
              "name": "Population", 
              "unit": "(thousands)"
            }, 
            {
              "id": 9, 
              "indicators": [
                {
                  "id": 307, 
                  "name": "Total"
                }
              ], 
              "name": "Population density", 
              "unit": "(people per sq. km.)"
            }
          ], 
          "id": 3, 
          "name": "Lit at night"
        }
      ]
    }, 
    {
      "id": 2, 
      "name": "Demographics", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 10, 
              "indicators": [
                {
                  "id": 308, 
                  "name": "Total"
                }
              ], 
              "name": "Crude birth rate", 
              "unit": "(live births per 1000 people)"
            }, 
            {
              "id": 11, 
              "indicators": [
                {
                  "id": 1, 
                  "name": "total"
                }, 
                {
                  "id": 2, 
                  "name": "male"
                }, 
                {
                  "id": 3, 
                  "name": "female"
                }
              ], 
              "name": "Crude death rate", 
              "unit": "(deaths per 1000 people)"
            }
          ], 
          "id": 4, 
          "name": "Births and Deaths"
        }, 
        {
          "categories": [
            {
              "id": 12, 
              "indicators": [
                {
                  "id": 4, 
                  "name": "0-14 or 65+ years"
                }, 
                {
                  "id": 5, 
                  "name": "0-14 years"
                }, 
                {
                  "id": 6, 
                  "name": "65+ years"
                }
              ], 
              "name": "Dependency ratio", 
              "unit": "(percent)"
            }, 
            {
              "id": 13, 
              "indicators": [
                {
                  "id": 7, 
                  "name": "All ages"
                }, 
                {
                  "id": 8, 
                  "name": "At birth"
                }, 
                {
                  "id": 9, 
                  "name": "0-4 years"
                }
              ], 
              "name": "Gender ratio", 
              "unit": "(percent)"
            }
          ], 
          "id": 5, 
          "name": "Age and Sex"
        }, 
        {
          "categories": [
            {
              "id": 14, 
              "indicators": [
                {
                  "id": 309, 
                  "name": "Total"
                }
              ], 
              "name": "Scheduled Caste (SC)", 
              "unit": "(percent)"
            }, 
            {
              "id": 15, 
              "indicators": [
                {
                  "id": 310, 
                  "name": "Total"
                }
              ], 
              "name": "Scheduled Tribe (ST)", 
              "unit": "(percent)"
            }
          ], 
          "id": 6, 
          "name": "Religion and social groups"
        }
      ]
    }, 
    {
      "id": 3, 
      "name": "Jobs", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 16, 
              "indicators": [
                {
                  "id": 10, 
                  "name": "Total"
                }, 
                {
                  "id": 11, 
                  "name": "Female"
                }, 
                {
                  "id": 12, 
                  "name": "Male"
                }
              ], 
              "name": "Working population, 15+ years", 
              "unit": "(percent)"
            }, 
            {
              "id": 17, 
              "indicators": [
                {
                  "id": 13, 
                  "name": "Total"
                }, 
                {
                  "id": 14, 
                  "name": "Female"
                }, 
                {
                  "id": 15, 
                  "name": "Male"
                }
              ], 
              "name": "Working population, 7+ years", 
              "unit": "(percent)"
            }, 
            {
              "id": 18, 
              "indicators": [
                {
                  "id": 16, 
                  "name": "Total"
                }, 
                {
                  "id": 17, 
                  "name": "Female"
                }, 
                {
                  "id": 18, 
                  "name": "Male"
                }
              ], 
              "name": "Labor force participation, 15+ years, usual", 
              "unit": "(percent of age group)"
            }, 
            {
              "id": 19, 
              "indicators": [
                {
                  "id": 19, 
                  "name": "Total"
                }, 
                {
                  "id": 20, 
                  "name": "Female"
                }, 
                {
                  "id": 21, 
                  "name": "Male"
                }
              ], 
              "name": "Labor force participation, 15+ years, weekly", 
              "unit": "(percent of age group)"
            }, 
            {
              "id": 20, 
              "indicators": [
                {
                  "id": 22, 
                  "name": "Total"
                }, 
                {
                  "id": 23, 
                  "name": "Female"
                }, 
                {
                  "id": 24, 
                  "name": "Male"
                }
              ], 
              "name": "Employment rate, 7+ years, main + marginal", 
              "unit": "(percent of age group)"
            }
          ], 
          "id": 7, 
          "name": "Labor force"
        }, 
        {
          "categories": [
            {
              "id": 21, 
              "indicators": [
                {
                  "id": 25, 
                  "name": "Total"
                }, 
                {
                  "id": 26, 
                  "name": "Female"
                }, 
                {
                  "id": 27, 
                  "name": "Male"
                }
              ], 
              "name": "Unemployment rate, 15+ years, usual", 
              "unit": "(percent of labor force)"
            }, 
            {
              "id": 22, 
              "indicators": [
                {
                  "id": 28, 
                  "name": "Total"
                }, 
                {
                  "id": 29, 
                  "name": "Female"
                }, 
                {
                  "id": 30, 
                  "name": "Male"
                }
              ], 
              "name": "Unemployment rate, 15+ years, weekly", 
              "unit": "(percent of labor force)"
            }, 
            {
              "id": 23, 
              "indicators": [
                {
                  "id": 31, 
                  "name": "Total"
                }, 
                {
                  "id": 32, 
                  "name": "Female"
                }, 
                {
                  "id": 33, 
                  "name": "Male"
                }
              ], 
              "name": "Unemployment rate, 15\u201324 years, usual", 
              "unit": "(percent of labor force)"
            }, 
            {
              "id": 24, 
              "indicators": [
                {
                  "id": 34, 
                  "name": "Total"
                }, 
                {
                  "id": 35, 
                  "name": "Female"
                }, 
                {
                  "id": 36, 
                  "name": "Male"
                }
              ], 
              "name": "Unemployment rate, 15\u201324 years, weekly", 
              "unit": "(percent of labor force)"
            }, 
            {
              "id": 25, 
              "indicators": [
                {
                  "id": 37, 
                  "name": "Total"
                }, 
                {
                  "id": 38, 
                  "name": "Female"
                }, 
                {
                  "id": 39, 
                  "name": "Male"
                }
              ], 
              "name": "Under-employment rate, 15+ years, marginal", 
              "unit": "(percent of labor force)"
            }
          ], 
          "id": 8, 
          "name": "Unemployment"
        }, 
        {
          "categories": [
            {
              "id": 26, 
              "indicators": [
                {
                  "id": 40, 
                  "name": "Agriculture"
                }, 
                {
                  "id": 41, 
                  "name": "Manufacturing"
                }, 
                {
                  "id": 42, 
                  "name": "Industry (including manufacturing)"
                }, 
                {
                  "id": 43, 
                  "name": "Services"
                }
              ], 
              "name": "Employment by sector", 
              "unit": "(percent of total employment)"
            }, 
            {
              "id": 27, 
              "indicators": [
                {
                  "id": 44, 
                  "name": "Total"
                }, 
                {
                  "id": 45, 
                  "name": "Female"
                }, 
                {
                  "id": 46, 
                  "name": "Male"
                }
              ], 
              "name": "Farmers", 
              "unit": "(percent of total employment)"
            }, 
            {
              "id": 28, 
              "indicators": [
                {
                  "id": 47, 
                  "name": "Total"
                }, 
                {
                  "id": 48, 
                  "name": "Female"
                }, 
                {
                  "id": 49, 
                  "name": "Male"
                }
              ], 
              "name": "Self-employed", 
              "unit": "(percent of total employment)"
            }, 
            {
              "id": 29, 
              "indicators": [
                {
                  "id": 50, 
                  "name": "Total"
                }, 
                {
                  "id": 51, 
                  "name": "Female"
                }, 
                {
                  "id": 52, 
                  "name": "Male"
                }
              ], 
              "name": "Casual wage earners", 
              "unit": "(percent of total employment)"
            }, 
            {
              "id": 30, 
              "indicators": [
                {
                  "id": 53, 
                  "name": "Total"
                }, 
                {
                  "id": 54, 
                  "name": "Female"
                }, 
                {
                  "id": 55, 
                  "name": "Male"
                }
              ], 
              "name": "Regular wage earners", 
              "unit": "(percent of total employment)"
            }
          ], 
          "id": 9, 
          "name": "Employment"
        }, 
        {
          "categories": [
            {
              "id": 31, 
              "indicators": [
                {
                  "id": 56, 
                  "name": "Total"
                }, 
                {
                  "id": 57, 
                  "name": "Female"
                }, 
                {
                  "id": 58, 
                  "name": "Male"
                }
              ], 
              "name": "Labor earnings by gender", 
              "unit": "(current USD per day)"
            }, 
            {
              "id": 32, 
              "indicators": [
                {
                  "id": 59, 
                  "name": "Agriculture"
                }, 
                {
                  "id": 60, 
                  "name": "Industry"
                }, 
                {
                  "id": 61, 
                  "name": "Services"
                }
              ], 
              "name": "Labor earnings by sector", 
              "unit": "(current USD per day)"
            }
          ], 
          "id": 10, 
          "name": "Earnings"
        }
      ]
    }, 
    {
      "id": 4, 
      "name": "Economic Activity", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 33, 
              "indicators": [
                {
                  "id": 311, 
                  "name": "Total"
                }
              ], 
              "name": "GDP", 
              "unit": "(current USD, in millions)"
            }, 
            {
              "id": 34, 
              "indicators": [
                {
                  "id": 312, 
                  "name": "Total"
                }
              ], 
              "name": "GDP per capita", 
              "unit": "(current USD)"
            }, 
            {
              "id": 35, 
              "indicators": [
                {
                  "id": 62, 
                  "name": "Agriculture, fishing, hunting and forestry (A, B)"
                }, 
                {
                  "id": 63, 
                  "name": "Mining and quarrying (C)"
                }, 
                {
                  "id": 64, 
                  "name": "Manufacturing (D)"
                }, 
                {
                  "id": 65, 
                  "name": "Electricity, gas and water supply (E)"
                }, 
                {
                  "id": 66, 
                  "name": "Construction (F)"
                }, 
                {
                  "id": 67, 
                  "name": "Trade, hotels and restaurants (G, H)"
                }, 
                {
                  "id": 68, 
                  "name": "Transportation, storage and communications (I)"
                }, 
                {
                  "id": 69, 
                  "name": "Financial intermediation (J)"
                }, 
                {
                  "id": 70, 
                  "name": "Real estate, renting and business activities (K)"
                }, 
                {
                  "id": 71, 
                  "name": "Public administration (L)"
                }, 
                {
                  "id": 72, 
                  "name": "Other (M, N, O, P, Q)"
                }
              ], 
              "name": "GVA by sector, ISIC 3.1", 
              "unit": "(percent of GDP)"
            }
          ], 
          "id": 11, 
          "name": "Output"
        }, 
        {
          "categories": [
            {
              "id": 36, 
              "indicators": [
                {
                  "id": 313, 
                  "name": "Total"
                }
              ], 
              "name": "Light intensity per 1000 people", 
              "unit": "(Digital Numbers of light per 1000 people)"
            }, 
            {
              "id": 37, 
              "indicators": [
                {
                  "id": 314, 
                  "name": "Total"
                }
              ], 
              "name": "Light intensity per area", 
              "unit": "(Digital Numbers of light per sq. km.) "
            }
          ], 
          "id": 12, 
          "name": "Night light intensity"
        }, 
        {
          "categories": [
            {
              "id": 38, 
              "indicators": [
                {
                  "id": 73, 
                  "name": "All"
                }, 
                {
                  "id": 74, 
                  "name": "Groundnut"
                }, 
                {
                  "id": 75, 
                  "name": "Maize"
                }, 
                {
                  "id": 76, 
                  "name": "Millets"
                }, 
                {
                  "id": 77, 
                  "name": "Pulses"
                }, 
                {
                  "id": 78, 
                  "name": "Rice"
                }, 
                {
                  "id": 79, 
                  "name": "Sugar cane"
                }, 
                {
                  "id": 80, 
                  "name": "Wheat"
                }
              ], 
              "name": "Crop yields, monetary", 
              "unit": "(2011 USD per ha., in thousands)"
            }, 
            {
              "id": 39, 
              "indicators": [
                {
                  "id": 81, 
                  "name": "All"
                }, 
                {
                  "id": 82, 
                  "name": "Groundnut"
                }, 
                {
                  "id": 83, 
                  "name": "Maize"
                }, 
                {
                  "id": 84, 
                  "name": "Millets"
                }, 
                {
                  "id": 85, 
                  "name": "Pulses"
                }, 
                {
                  "id": 86, 
                  "name": "Rice"
                }, 
                {
                  "id": 87, 
                  "name": "Sugar cane"
                }, 
                {
                  "id": 88, 
                  "name": "Wheat"
                }
              ], 
              "name": "Crop yields, quantity", 
              "unit": "(tonnes per ha.)"
            }
          ], 
          "id": 13, 
          "name": "Productivity of agriculture"
        }, 
        {
          "categories": [], 
          "id": 14, 
          "name": "Productivity of manufacturing"
        }, 
        {
          "categories": [], 
          "id": 15, 
          "name": "Productivity of services"
        }
      ]
    }, 
    {
      "id": 5, 
      "name": "Infrastructure", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 40, 
              "indicators": [
                {
                  "id": 89, 
                  "name": "Total"
                }, 
                {
                  "id": 90, 
                  "name": "Major highways, primary and secondary"
                }, 
                {
                  "id": 91, 
                  "name": "Tertiary and rural"
                }, 
                {
                  "id": 92, 
                  "name": "Other"
                }
              ], 
              "name": "Road length", 
              "unit": "(km.)"
            }, 
            {
              "id": 41, 
              "indicators": [
                {
                  "id": 93, 
                  "name": "Total"
                }, 
                {
                  "id": 94, 
                  "name": "Major highways, primary and secondary"
                }, 
                {
                  "id": 95, 
                  "name": "Tertiary and rural"
                }, 
                {
                  "id": 96, 
                  "name": "Other"
                }
              ], 
              "name": "Road intensity", 
              "unit": "(km. per 1000 sq. km.)"
            }, 
            {
              "id": 42, 
              "indicators": [
                {
                  "id": 97, 
                  "name": "Total"
                }, 
                {
                  "id": 98, 
                  "name": "Railway"
                }, 
                {
                  "id": 99, 
                  "name": "Metro"
                }
              ], 
              "name": "Number of stations", 
              "unit": "(stations)"
            }, 
            {
              "id": 43, 
              "indicators": [
                {
                  "id": 100, 
                  "name": "Total"
                }, 
                {
                  "id": 101, 
                  "name": "Railway"
                }, 
                {
                  "id": 102, 
                  "name": "Metro"
                }
              ], 
              "name": "Density of stations", 
              "unit": "(stations per 1000 sq. km.)"
            }
          ], 
          "id": 16, 
          "name": "Connectivity"
        }, 
        {
          "categories": [
            {
              "id": 44, 
              "indicators": [
                {
                  "id": 103, 
                  "name": "Total"
                }, 
                {
                  "id": 104, 
                  "name": "Slums"
                }
              ], 
              "name": "Households\u2019 access to electricity", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 45, 
              "indicators": [
                {
                  "id": 105, 
                  "name": "Biomass"
                }, 
                {
                  "id": 106, 
                  "name": "Coal/lignite/charcoal"
                }, 
                {
                  "id": 107, 
                  "name": "Kerosene"
                }, 
                {
                  "id": 108, 
                  "name": "LPG/PNG"
                }, 
                {
                  "id": 109, 
                  "name": "Electricity"
                }, 
                {
                  "id": 110, 
                  "name": "Biogas"
                }
              ], 
              "name": "Households\u2019 use of fuel for cooking", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 46, 
              "indicators": [
                {
                  "id": 111, 
                  "name": "Kerosene"
                }, 
                {
                  "id": 112, 
                  "name": "Gas/other oil"
                }, 
                {
                  "id": 113, 
                  "name": "Electricity"
                }, 
                {
                  "id": 114, 
                  "name": "Candle/others"
                }, 
                {
                  "id": 115, 
                  "name": "No lighting arrangement"
                }
              ], 
              "name": "Households\u2019 use of fuel for light", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 47, 
              "indicators": [
                {
                  "id": 116, 
                  "name": "Total"
                }, 
                {
                  "id": 117, 
                  "name": "Public"
                }, 
                {
                  "id": 118, 
                  "name": "Private"
                }
              ], 
              "name": "Non-agriculture enterprises\u2019 use of electricity", 
              "unit": "(percent of establishments)"
            }
          ], 
          "id": 17, 
          "name": "Energy"
        }, 
        {
          "categories": [
            {
              "id": 48, 
              "indicators": [
                {
                  "id": 119, 
                  "name": "Total"
                }, 
                {
                  "id": 120, 
                  "name": "Slums"
                }
              ], 
              "name": "Households\u2019 access to improved water", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 49, 
              "indicators": [
                {
                  "id": 121, 
                  "name": "Total"
                }, 
                {
                  "id": 122, 
                  "name": "Slums"
                }
              ], 
              "name": "Households\u2019 access to improved sanitation", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 50, 
              "indicators": [
                {
                  "id": 123, 
                  "name": "Total"
                }, 
                {
                  "id": 124, 
                  "name": "Slums"
                }
              ], 
              "name": "Households\u2019 access to enhanced improved sanitation", 
              "unit": "(percent of households)"
            }
          ], 
          "id": 18, 
          "name": "Water and Sanitation"
        }, 
        {
          "categories": [
            {
              "id": 51, 
              "indicators": [
                {
                  "id": 125, 
                  "name": "Total"
                }, 
                {
                  "id": 126, 
                  "name": "Slums"
                }
              ], 
              "name": "Housing units in good condition", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 52, 
              "indicators": [
                {
                  "id": 315, 
                  "name": "Total"
                }
              ], 
              "name": "Housing units located in slums", 
              "unit": "(percent of housing units)"
            }, 
            {
              "id": 53, 
              "indicators": [
                {
                  "id": 127, 
                  "name": "Total"
                }, 
                {
                  "id": 128, 
                  "name": "Slums"
                }
              ], 
              "name": "Use of biomass to cook indoors", 
              "unit": "(percent of households)"
            }
          ], 
          "id": 19, 
          "name": "Housing"
        }
      ]
    }, 
    {
      "id": 6, 
      "name": "Information Technology", 
      "sub_themes": [
        {
          "categories": [], 
          "id": 20, 
          "name": "Computer"
        }, 
        {
          "categories": [], 
          "id": 21, 
          "name": "Internet"
        }, 
        {
          "categories": [], 
          "id": 22, 
          "name": "Cellphone"
        }
      ]
    }, 
    {
      "id": 7, 
      "name": "Finance", 
      "sub_themes": [
        {
          "categories": [], 
          "id": 23, 
          "name": "Access"
        }
      ]
    }, 
    {
      "id": 8, 
      "name": "Business", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 54, 
              "indicators": [
                {
                  "id": 316, 
                  "name": "Total"
                }
              ], 
              "name": "Non-agriculture enterprises", 
              "unit": "(thousands)"
            }, 
            {
              "id": 55, 
              "indicators": [
                {
                  "id": 129, 
                  "name": "1"
                }, 
                {
                  "id": 130, 
                  "name": "2-5"
                }, 
                {
                  "id": 131, 
                  "name": "6-9"
                }, 
                {
                  "id": 132, 
                  "name": "10\u201319"
                }, 
                {
                  "id": 133, 
                  "name": "20\u201399"
                }, 
                {
                  "id": 134, 
                  "name": "100+"
                }
              ], 
              "name": "Non-agriculture enterprises by size", 
              "unit": "(percent of establishments)"
            }, 
            {
              "id": 56, 
              "indicators": [
                {
                  "id": 135, 
                  "name": "Mining and quarrying (C)"
                }, 
                {
                  "id": 136, 
                  "name": "Manufacturing (D)"
                }, 
                {
                  "id": 137, 
                  "name": "Electricity, gas and water supply (E)"
                }, 
                {
                  "id": 138, 
                  "name": "Construction (F)"
                }, 
                {
                  "id": 139, 
                  "name": "Trade, hotels and restaurants (G, H)"
                }, 
                {
                  "id": 140, 
                  "name": "Transportation, storage and communications (I)"
                }, 
                {
                  "id": 141, 
                  "name": "Financial intermediation (J)"
                }, 
                {
                  "id": 142, 
                  "name": "Real estate, renting and business activities (K)"
                }, 
                {
                  "id": 143, 
                  "name": "Public administration (L)"
                }, 
                {
                  "id": 144, 
                  "name": "Education, health and social (M, N, O)"
                }
              ], 
              "name": "Non-agriculture enterprises by sector, ISIC 3.1", 
              "unit": "(percent of establishments)"
            }, 
            {
              "id": 57, 
              "indicators": [
                {
                  "id": 145, 
                  "name": "2 digit"
                }, 
                {
                  "id": 146, 
                  "name": "4 digit"
                }
              ], 
              "name": "Specialization index of private non-agriculture enterprises, ISIC 3.1", 
              "unit": "(index)"
            }, 
            {
              "id": 58, 
              "indicators": [
                {
                  "id": 147, 
                  "name": "2 digit"
                }, 
                {
                  "id": 148, 
                  "name": "4 digit"
                }
              ], 
              "name": "Diversification index of private non-agriculture enterprises, ISIC 3.1", 
              "unit": "(index)"
            }, 
            {
              "id": 59, 
              "indicators": [
                {
                  "id": 149, 
                  "name": "Public"
                }, 
                {
                  "id": 150, 
                  "name": "Private"
                }
              ], 
              "name": "Non-agriculture enterprises by ownership", 
              "unit": "(percent of establishments)"
            }
          ], 
          "id": 24, 
          "name": "Economic census"
        }, 
        {
          "categories": [], 
          "id": 25, 
          "name": "Formal manufacturing"
        }, 
        {
          "categories": [], 
          "id": 26, 
          "name": "Informal manufacturing"
        }, 
        {
          "categories": [], 
          "id": 27, 
          "name": "Informal services"
        }
      ]
    }, 
    {
      "id": 9, 
      "name": "Living Standards", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 60, 
              "indicators": [
                {
                  "id": 317, 
                  "name": "Total"
                }
              ], 
              "name": "Household per capita expenditure", 
              "unit": "(current USD per capita per month)"
            }, 
            {
              "id": 61, 
              "indicators": [
                {
                  "id": 318, 
                  "name": "Total"
                }
              ], 
              "name": "Poverty rate at $1.25 a day (PPP)", 
              "unit": "(percent of population)"
            }, 
            {
              "id": 62, 
              "indicators": [
                {
                  "id": 319, 
                  "name": "Total"
                }
              ], 
              "name": "Poverty rate at national poverty line", 
              "unit": "(percent of population)"
            }, 
            {
              "id": 63, 
              "indicators": [
                {
                  "id": 320, 
                  "name": "Total"
                }
              ], 
              "name": "Share of bottom 40 percent", 
              "unit": "(percent of population)"
            }, 
            {
              "id": 64, 
              "indicators": [
                {
                  "id": 321, 
                  "name": "Total"
                }
              ], 
              "name": "90 to 10 ratio of per capita expenditure", 
              "unit": "(ratio)"
            }, 
            {
              "id": 65, 
              "indicators": [
                {
                  "id": 322, 
                  "name": "Total"
                }
              ], 
              "name": "Gini coefficient of per capita expenditure", 
              "unit": "(percent)"
            }, 
            {
              "id": 66, 
              "indicators": [
                {
                  "id": 323, 
                  "name": "Total"
                }
              ], 
              "name": "MLD of per capita expenditure", 
              "unit": "(index)"
            }
          ], 
          "id": 28, 
          "name": "Consumption"
        }, 
        {
          "categories": [
            {
              "id": 67, 
              "indicators": [
                {
                  "id": 151, 
                  "name": "Total"
                }, 
                {
                  "id": 152, 
                  "name": "Slums"
                }
              ], 
              "name": "Access to all key durable assets", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 68, 
              "indicators": [
                {
                  "id": 153, 
                  "name": "Total"
                }, 
                {
                  "id": 154, 
                  "name": "Slums"
                }
              ], 
              "name": "Lack of access to durable assets", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 69, 
              "indicators": [
                {
                  "id": 324, 
                  "name": "Total"
                }
              ], 
              "name": "Housing ownership", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 70, 
              "indicators": [
                {
                  "id": 325, 
                  "name": "Total"
                }
              ], 
              "name": "Land ownership", 
              "unit": "(percent of households)"
            }, 
            {
              "id": 71, 
              "indicators": [
                {
                  "id": 326, 
                  "name": "Total"
                }
              ], 
              "name": "Gini coefficient of landholding", 
              "unit": "(percent)"
            }, 
            {
              "id": 72, 
              "indicators": [
                {
                  "id": 327, 
                  "name": "Total"
                }
              ], 
              "name": "MLD of landholding", 
              "unit": "(index)"
            }
          ], 
          "id": 29, 
          "name": "Wealth"
        }, 
        {
          "categories": [
            {
              "id": 73, 
              "indicators": [
                {
                  "id": 155, 
                  "name": "total"
                }, 
                {
                  "id": 156, 
                  "name": "slums"
                }
              ], 
              "name": "People per household", 
              "unit": "(people)"
            }, 
            {
              "id": 74, 
              "indicators": [
                {
                  "id": 157, 
                  "name": "total"
                }, 
                {
                  "id": 158, 
                  "name": "slums"
                }
              ], 
              "name": "People per room", 
              "unit": "(people)"
            }, 
            {
              "id": 75, 
              "indicators": [
                {
                  "id": 159, 
                  "name": "total"
                }, 
                {
                  "id": 160, 
                  "name": "slums"
                }
              ], 
              "name": "Overcrowding", 
              "unit": "(percent of housing units)"
            }
          ], 
          "id": 30, 
          "name": "Household size"
        }
      ]
    }, 
    {
      "id": 10, 
      "name": "Health", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 76, 
              "indicators": [
                {
                  "id": 328, 
                  "name": "Total"
                }
              ], 
              "name": "Underweight", 
              "unit": "(percent of children, 0-4 years)"
            }, 
            {
              "id": 77, 
              "indicators": [
                {
                  "id": 329, 
                  "name": "Total"
                }
              ], 
              "name": "Wasting", 
              "unit": "(percent of children, 0-4 years)"
            }, 
            {
              "id": 78, 
              "indicators": [
                {
                  "id": 330, 
                  "name": "Total"
                }
              ], 
              "name": "Stunting", 
              "unit": "(percent of children, 0-4 years)"
            }
          ], 
          "id": 31, 
          "name": "Nutrition"
        }, 
        {
          "categories": [
            {
              "id": 79, 
              "indicators": [
                {
                  "id": 331, 
                  "name": "Total"
                }
              ], 
              "name": "Secondary health care centers", 
              "unit": "(per 1,000 people)"
            }, 
            {
              "id": 80, 
              "indicators": [
                {
                  "id": 332, 
                  "name": "Total"
                }
              ], 
              "name": "Primary health care centers", 
              "unit": "(per 1,000 people)"
            }, 
            {
              "id": 81, 
              "indicators": [
                {
                  "id": 333, 
                  "name": "Total"
                }
              ], 
              "name": "Institutional births", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 82, 
              "indicators": [
                {
                  "id": 334, 
                  "name": "Total"
                }
              ], 
              "name": "Diarrhea treatment", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 83, 
              "indicators": [
                {
                  "id": 335, 
                  "name": "Total"
                }
              ], 
              "name": "DPT immunization", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 84, 
              "indicators": [
                {
                  "id": 336, 
                  "name": "Total"
                }
              ], 
              "name": "Full immunization", 
              "unit": "(percent of population group)"
            }
          ], 
          "id": 32, 
          "name": "Health Services"
        }, 
        {
          "categories": [
            {
              "id": 85, 
              "indicators": [
                {
                  "id": 337, 
                  "name": "Total"
                }
              ], 
              "name": "Three ante-natal care visits", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 86, 
              "indicators": [
                {
                  "id": 338, 
                  "name": "Total"
                }
              ], 
              "name": "Female use of condom ", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 87, 
              "indicators": [
                {
                  "id": 339, 
                  "name": "Total"
                }
              ], 
              "name": "Female contraceptive prevalence ", 
              "unit": "(percent of population group)"
            }
          ], 
          "id": 33, 
          "name": "Reproductive Health"
        }, 
        {
          "categories": [
            {
              "id": 88, 
              "indicators": [
                {
                  "id": 161, 
                  "name": "Total"
                }, 
                {
                  "id": 162, 
                  "name": "Female"
                }, 
                {
                  "id": 163, 
                  "name": "Male"
                }
              ], 
              "name": "Infant mortality rate", 
              "unit": "(deaths per 1,000 live births)"
            }, 
            {
              "id": 89, 
              "indicators": [
                {
                  "id": 340, 
                  "name": "Total"
                }
              ], 
              "name": "Neonatal mortality rate", 
              "unit": "(deaths per 1,000 live births)"
            }, 
            {
              "id": 90, 
              "indicators": [
                {
                  "id": 164, 
                  "name": "Total"
                }, 
                {
                  "id": 165, 
                  "name": "Female"
                }, 
                {
                  "id": 166, 
                  "name": "Male"
                }
              ], 
              "name": "Under-five mortality rate", 
              "unit": "(deaths per 1,000 live births)"
            }, 
            {
              "id": 91, 
              "indicators": [
                {
                  "id": 167, 
                  "name": "Acute respiratory infection"
                }, 
                {
                  "id": 168, 
                  "name": "Diarrhea"
                }, 
                {
                  "id": 169, 
                  "name": "Fever"
                }
              ], 
              "name": "Acute illness among children", 
              "unit": "(percent of children, 0\u20134 years)"
            }, 
            {
              "id": 92, 
              "indicators": [
                {
                  "id": 170, 
                  "name": "Acute respiratory infection"
                }, 
                {
                  "id": 171, 
                  "name": "Diarrhea"
                }, 
                {
                  "id": 172, 
                  "name": "Fever"
                }
              ], 
              "name": "Acute illness", 
              "unit": "(per 100,000 people)"
            }, 
            {
              "id": 93, 
              "indicators": [
                {
                  "id": 173, 
                  "name": "Arthritis"
                }, 
                {
                  "id": 174, 
                  "name": "Asthma"
                }, 
                {
                  "id": 175, 
                  "name": "Diabetes"
                }, 
                {
                  "id": 176, 
                  "name": "Hypertension"
                }, 
                {
                  "id": 177, 
                  "name": "Tuberculosis"
                }
              ], 
              "name": "Chronic illness", 
              "unit": "(per 100,000 people)"
            }
          ], 
          "id": 34, 
          "name": "Mortality and morbidity"
        }
      ]
    }, 
    {
      "id": 11, 
      "name": "Education", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 94, 
              "indicators": [
                {
                  "id": 178, 
                  "name": "Total"
                }, 
                {
                  "id": 179, 
                  "name": "Female"
                }, 
                {
                  "id": 180, 
                  "name": "Male"
                }
              ], 
              "name": "Gross primary enrollment", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 95, 
              "indicators": [
                {
                  "id": 341, 
                  "name": "Total"
                }
              ], 
              "name": "Out-of-school children", 
              "unit": "(percent of population group)"
            }
          ], 
          "id": 35, 
          "name": "Enrollment"
        }, 
        {
          "categories": [
            {
              "id": 96, 
              "indicators": [
                {
                  "id": 181, 
                  "name": "Total"
                }, 
                {
                  "id": 182, 
                  "name": "Female"
                }, 
                {
                  "id": 183, 
                  "name": "Male"
                }
              ], 
              "name": "Literacy rate, 7+ years", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 97, 
              "indicators": [
                {
                  "id": 184, 
                  "name": "Total"
                }, 
                {
                  "id": 185, 
                  "name": "Female"
                }, 
                {
                  "id": 186, 
                  "name": "Male"
                }
              ], 
              "name": "Literacy rate, 15+ years", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 98, 
              "indicators": [
                {
                  "id": 187, 
                  "name": "Total"
                }, 
                {
                  "id": 188, 
                  "name": "Female"
                }, 
                {
                  "id": 189, 
                  "name": "Male"
                }
              ], 
              "name": "Secondary education completion rate, 15+ years", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 99, 
              "indicators": [
                {
                  "id": 190, 
                  "name": "Total"
                }, 
                {
                  "id": 191, 
                  "name": "Female"
                }, 
                {
                  "id": 192, 
                  "name": "Male"
                }
              ], 
              "name": "Tertiary education completion rate, 15+ years", 
              "unit": "(percent of population group)"
            }
          ], 
          "id": 36, 
          "name": "Attainment"
        }, 
        {
          "categories": [
            {
              "id": 100, 
              "indicators": [
                {
                  "id": 342, 
                  "name": "Total"
                }
              ], 
              "name": "Children who can recognize numbers 1\u20139", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 101, 
              "indicators": [
                {
                  "id": 343, 
                  "name": "Total"
                }
              ], 
              "name": "Children who can read letters or words", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 102, 
              "indicators": [
                {
                  "id": 344, 
                  "name": "Total"
                }
              ], 
              "name": "Children who can do subtraction", 
              "unit": "(percent of population group)"
            }, 
            {
              "id": 103, 
              "indicators": [
                {
                  "id": 345, 
                  "name": "Total"
                }
              ], 
              "name": "Children who can read Grade 1 text", 
              "unit": "(percent of population group)"
            }
          ], 
          "id": 37, 
          "name": "Learning"
        }, 
        {
          "categories": [
            {
              "id": 104, 
              "indicators": [
                {
                  "id": 346, 
                  "name": "Total"
                }
              ], 
              "name": "Classrooms in good condition in primary schools", 
              "unit": "(percent of classrooms)"
            }, 
            {
              "id": 105, 
              "indicators": [
                {
                  "id": 347, 
                  "name": "Total"
                }
              ], 
              "name": "Access to electricity in primary schools", 
              "unit": "(percentof schools)"
            }, 
            {
              "id": 106, 
              "indicators": [
                {
                  "id": 348, 
                  "name": "Total"
                }
              ], 
              "name": "Girls\u2019 toilets in primary schools", 
              "unit": "(percent of schools with girls)"
            }, 
            {
              "id": 107, 
              "indicators": [
                {
                  "id": 349, 
                  "name": "Total"
                }
              ], 
              "name": "Drinking water facility in primary schools", 
              "unit": "(percent of schools)"
            }, 
            {
              "id": 108, 
              "indicators": [
                {
                  "id": 350, 
                  "name": "Total"
                }
              ], 
              "name": "Pupil-teacher ratio in primary schools", 
              "unit": "(students per teacher)"
            }, 
            {
              "id": 109, 
              "indicators": [
                {
                  "id": 351, 
                  "name": "Total"
                }
              ], 
              "name": "Pupil-teacher ratio over 30 in primary schools", 
              "unit": "(percent of schools)"
            }
          ], 
          "id": 38, 
          "name": "Education Services"
        }
      ]
    }, 
    {
      "id": 12, 
      "name": "Environment", 
      "sub_themes": [
        {
          "categories": [
            {
              "id": 110, 
              "indicators": [
                {
                  "id": 352, 
                  "name": "Total"
                }
              ], 
              "name": "Elevation", 
              "unit": "(meters)"
            }, 
            {
              "id": 111, 
              "indicators": [
                {
                  "id": 353, 
                  "name": "Total"
                }
              ], 
              "name": "Surface Roughness", 
              "unit": "(meters)"
            }, 
            {
              "id": 112, 
              "indicators": [
                {
                  "id": 354, 
                  "name": "Total"
                }
              ], 
              "name": "Land area with limited or no constraints", 
              "unit": "(percent of land area)"
            }, 
            {
              "id": 113, 
              "indicators": [
                {
                  "id": 193, 
                  "name": "Total"
                }, 
                {
                  "id": 194, 
                  "name": "Ground Water"
                }, 
                {
                  "id": 195, 
                  "name": "Surface Water"
                }
              ], 
              "name": "Land area equipped for irrigation", 
              "unit": "Percent of Land Area"
            }, 
            {
              "id": 114, 
              "indicators": [
                {
                  "id": 355, 
                  "name": "Total"
                }
              ], 
              "name": "Land area actually irrigated", 
              "unit": "Percent of Land Area"
            }
          ], 
          "id": 39, 
          "name": "Terrain"
        }, 
        {
          "categories": [
            {
              "id": 115, 
              "indicators": [
                {
                  "id": 356, 
                  "name": "Total"
                }
              ], 
              "name": "Cropland", 
              "unit": "(percent of area)"
            }, 
            {
              "id": 116, 
              "indicators": [
                {
                  "id": 357, 
                  "name": "Total"
                }
              ], 
              "name": "Forest", 
              "unit": "(percent of area)"
            }, 
            {
              "id": 117, 
              "indicators": [
                {
                  "id": 196, 
                  "name": "Total"
                }, 
                {
                  "id": 197, 
                  "name": "Public"
                }, 
                {
                  "id": 198, 
                  "name": "Private"
                }, 
                {
                  "id": 199, 
                  "name": "Foreign"
                }
              ], 
              "name": "Mineral Facilities", 
              "unit": "(number of facilities)"
            }, 
            {
              "id": 118, 
              "indicators": [
                {
                  "id": 358, 
                  "name": "Total"
                }
              ], 
              "name": "Mineral Production Capacity", 
              "unit": "thousand metric tons per year"
            }, 
            {
              "id": 119, 
              "indicators": [
                {
                  "id": 200, 
                  "name": "Total"
                }, 
                {
                  "id": 201, 
                  "name": "National"
                }, 
                {
                  "id": 202, 
                  "name": "International"
                }
              ], 
              "name": "Protected Land", 
              "unit": "percent of area"
            }
          ], 
          "id": 40, 
          "name": "Natural resources"
        }, 
        {
          "categories": [
            {
              "id": 120, 
              "indicators": [
                {
                  "id": 203, 
                  "name": "January"
                }, 
                {
                  "id": 204, 
                  "name": "February"
                }, 
                {
                  "id": 205, 
                  "name": "March"
                }, 
                {
                  "id": 206, 
                  "name": "April"
                }, 
                {
                  "id": 207, 
                  "name": "May"
                }, 
                {
                  "id": 208, 
                  "name": "June"
                }, 
                {
                  "id": 209, 
                  "name": "July"
                }, 
                {
                  "id": 210, 
                  "name": "August"
                }, 
                {
                  "id": 211, 
                  "name": "September"
                }, 
                {
                  "id": 212, 
                  "name": "October"
                }, 
                {
                  "id": 213, 
                  "name": "November"
                }, 
                {
                  "id": 214, 
                  "name": "December"
                }
              ], 
              "name": "Monthly temperature", 
              "unit": "(\u00baC)"
            }, 
            {
              "id": 121, 
              "indicators": [
                {
                  "id": 215, 
                  "name": "January"
                }, 
                {
                  "id": 216, 
                  "name": "February"
                }, 
                {
                  "id": 217, 
                  "name": "March"
                }, 
                {
                  "id": 218, 
                  "name": "April"
                }, 
                {
                  "id": 219, 
                  "name": "May"
                }, 
                {
                  "id": 220, 
                  "name": "June"
                }, 
                {
                  "id": 221, 
                  "name": "July"
                }, 
                {
                  "id": 222, 
                  "name": "August"
                }, 
                {
                  "id": 223, 
                  "name": "September"
                }, 
                {
                  "id": 224, 
                  "name": "October"
                }, 
                {
                  "id": 225, 
                  "name": "November"
                }, 
                {
                  "id": 226, 
                  "name": "December"
                }
              ], 
              "name": "Decadal average of monthly temperature", 
              "unit": "(\u00baC)"
            }, 
            {
              "id": 122, 
              "indicators": [
                {
                  "id": 227, 
                  "name": "January"
                }, 
                {
                  "id": 228, 
                  "name": "February"
                }, 
                {
                  "id": 229, 
                  "name": "March"
                }, 
                {
                  "id": 230, 
                  "name": "April"
                }, 
                {
                  "id": 231, 
                  "name": "May"
                }, 
                {
                  "id": 232, 
                  "name": "June"
                }, 
                {
                  "id": 233, 
                  "name": "July"
                }, 
                {
                  "id": 234, 
                  "name": "August"
                }, 
                {
                  "id": 235, 
                  "name": "September"
                }, 
                {
                  "id": 236, 
                  "name": "October"
                }, 
                {
                  "id": 237, 
                  "name": "November"
                }, 
                {
                  "id": 238, 
                  "name": "December"
                }
              ], 
              "name": "Decadal variation of monthly temperature", 
              "unit": "(\u00baC)"
            }, 
            {
              "id": 123, 
              "indicators": [
                {
                  "id": 239, 
                  "name": "January"
                }, 
                {
                  "id": 240, 
                  "name": "February"
                }, 
                {
                  "id": 241, 
                  "name": "March"
                }, 
                {
                  "id": 242, 
                  "name": "April"
                }, 
                {
                  "id": 243, 
                  "name": "May"
                }, 
                {
                  "id": 244, 
                  "name": "June"
                }, 
                {
                  "id": 245, 
                  "name": "July"
                }, 
                {
                  "id": 246, 
                  "name": "August"
                }, 
                {
                  "id": 247, 
                  "name": "September"
                }, 
                {
                  "id": 248, 
                  "name": "October"
                }, 
                {
                  "id": 249, 
                  "name": "November"
                }, 
                {
                  "id": 250, 
                  "name": "December"
                }
              ], 
              "name": "Temperature anomaly", 
              "unit": "(\u00baC)"
            }, 
            {
              "id": 124, 
              "indicators": [
                {
                  "id": 251, 
                  "name": "January"
                }, 
                {
                  "id": 252, 
                  "name": "February"
                }, 
                {
                  "id": 253, 
                  "name": "March"
                }, 
                {
                  "id": 254, 
                  "name": "April"
                }, 
                {
                  "id": 255, 
                  "name": "May"
                }, 
                {
                  "id": 256, 
                  "name": "June"
                }, 
                {
                  "id": 257, 
                  "name": "July"
                }, 
                {
                  "id": 258, 
                  "name": "August"
                }, 
                {
                  "id": 259, 
                  "name": "September"
                }, 
                {
                  "id": 260, 
                  "name": "October"
                }, 
                {
                  "id": 261, 
                  "name": "November"
                }, 
                {
                  "id": 262, 
                  "name": "December"
                }
              ], 
              "name": "Precipitation", 
              "unit": "(mm)"
            }, 
            {
              "id": 125, 
              "indicators": [
                {
                  "id": 263, 
                  "name": "January"
                }, 
                {
                  "id": 264, 
                  "name": "February"
                }, 
                {
                  "id": 265, 
                  "name": "March"
                }, 
                {
                  "id": 266, 
                  "name": "April"
                }, 
                {
                  "id": 267, 
                  "name": "May"
                }, 
                {
                  "id": 268, 
                  "name": "June"
                }, 
                {
                  "id": 269, 
                  "name": "July"
                }, 
                {
                  "id": 270, 
                  "name": "August"
                }, 
                {
                  "id": 271, 
                  "name": "September"
                }, 
                {
                  "id": 272, 
                  "name": "October"
                }, 
                {
                  "id": 273, 
                  "name": "November"
                }, 
                {
                  "id": 274, 
                  "name": "December"
                }
              ], 
              "name": "Decadal average of monthly precipitation", 
              "unit": "(mm)"
            }, 
            {
              "id": 126, 
              "indicators": [
                {
                  "id": 275, 
                  "name": "January"
                }, 
                {
                  "id": 276, 
                  "name": "February"
                }, 
                {
                  "id": 277, 
                  "name": "March"
                }, 
                {
                  "id": 278, 
                  "name": "April"
                }, 
                {
                  "id": 279, 
                  "name": "May"
                }, 
                {
                  "id": 280, 
                  "name": "June"
                }, 
                {
                  "id": 281, 
                  "name": "July"
                }, 
                {
                  "id": 282, 
                  "name": "August"
                }, 
                {
                  "id": 283, 
                  "name": "September"
                }, 
                {
                  "id": 284, 
                  "name": "October"
                }, 
                {
                  "id": 285, 
                  "name": "November"
                }, 
                {
                  "id": 286, 
                  "name": "December"
                }
              ], 
              "name": "Decadal variation of monthly precipitation", 
              "unit": "(mm)"
            }, 
            {
              "id": 127, 
              "indicators": [
                {
                  "id": 287, 
                  "name": "January"
                }, 
                {
                  "id": 288, 
                  "name": "February"
                }, 
                {
                  "id": 289, 
                  "name": "March"
                }, 
                {
                  "id": 290, 
                  "name": "April"
                }, 
                {
                  "id": 291, 
                  "name": "May"
                }, 
                {
                  "id": 292, 
                  "name": "June"
                }, 
                {
                  "id": 293, 
                  "name": "July"
                }, 
                {
                  "id": 294, 
                  "name": "August"
                }, 
                {
                  "id": 295, 
                  "name": "September"
                }, 
                {
                  "id": 296, 
                  "name": "October"
                }, 
                {
                  "id": 297, 
                  "name": "November"
                }, 
                {
                  "id": 298, 
                  "name": "December"
                }
              ], 
              "name": "Precipitation anomaly", 
              "unit": "(mm)"
            }
          ], 
          "id": 41, 
          "name": "Climate"
        }, 
        {
          "categories": [
            {
              "id": 128, 
              "indicators": [
                {
                  "id": 359, 
                  "name": "Total"
                }
              ], 
              "name": "Carbon monoxide levels", 
              "unit": "(parts per billion by volume)"
            }, 
            {
              "id": 129, 
              "indicators": [
                {
                  "id": 360, 
                  "name": "Total"
                }
              ], 
              "name": "Nitrogen dioxide levels", 
              "unit": "(billion molecules/mm2)"
            }, 
            {
              "id": 130, 
              "indicators": [
                {
                  "id": 361, 
                  "name": "Total"
                }
              ], 
              "name": "Aerosol particle radius", 
              "unit": "(percent of small particles)"
            }, 
            {
              "id": 131, 
              "indicators": [
                {
                  "id": 362, 
                  "name": "Total"
                }
              ], 
              "name": "Aerosol optical thickness", 
              "unit": "(thickness scale  0\u20131)"
            }
          ], 
          "id": 42, 
          "name": "Pollution"
        }
      ]
    }
  ]
  return {
    ...ownProps,
    data: state.app.heirarchy ? state.app.heirarchy : [] 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestHeirarchy: () => dispatch(appActionCreator.requestHeirarchy()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TreeContainer));
