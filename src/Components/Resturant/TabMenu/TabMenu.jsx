import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabMenu.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabMenu() {

  const [typeOfFoods, setTypeOfFoods] = React.useState([
    { type: 'صبحانه', id: 0 },
    { type: 'پیش غذا', id: 1 },
    { type: 'سالاد', id: 2 },
    { type: 'دسر', id: 3 },
    { type: 'نوشیدنی', id: 4 },
    { type: 'غذای اصلی', id: 5 },
  ])

  const [foodInfos, setFoodInfos] = React.useState(
    [
      { name: 'سوسیس تخم مرغ', price: '30', material: 'سوسیس 90%گوشت گوساله،تخم مرغ', id: 0 },
      { name: 'املت ایتالیایی', price: '75', material: 'سینه مرغ، قارچ، سیب زمینی،تخم مرغ', id: 0 },
      { name: 'پنکیک', price: '30', material: 'شیر، سرکه ،پودروانیل ،تخم مرغ،عسل', id: 0 },
      { name: 'کله پاچه', price: '80', material: 'کله پاچه ،ادویه مخصوص، نخود', id: 0 },
      { name: 'صبحانه ساده', price: '25 ', material: 'مربا، پنیر، نان تازه،کره', id: 0 },
      { name: 'حلیم', price: '40', material: 'گندم، گوشت راسته گوساله', id: 0 },
    ],
    [
      { name: 'سوپ ورمیشل', price: '40', material: 'سینه مرغ رشته ورمیشل،انواع سبزی ها', id: 1 },
      { name: 'کشک بادمجان', price: '45', material: 'بادمجان تنوری،کشک', id: 1 },
      { name: 'سیب زمینی تنوری', price: '30', material: 'سیب زمینی ،سس مخصوص، روغن زیتون، پنیر پارمیزان ', id: 1 },
      { name: 'پنیر سوخاری', price: '45', material: 'پنیرخامه های، پنیرموزارلا، پودرسوخاری، انواع سبزیها', id: 1 },
      { name: 'آب دوغ خیار', price: '30', material: 'آب ،دوغ ، خیار ، کشمش ،گردو', id: 1 },
      { name: 'آش رشته', price: '40', material: 'حبوبات، رشته آش، سبزی، پیازداغ', id: 1 },
    ],
    [
      { name: 'سالادشیرازی', price: '20', material: 'خیار، گوجه، پیاز', id: 2 },
      { name: 'سالاداندونزی', price: '40', material: '', id: 2 },
      { name: 'سزار', price: '45', material: 'سیر خردشده و ماهی آنچوی، آب لیمو، سس وسترشر، کاهو', id: 2 },
      { name: 'سالادماکارونی', price: '45', material: ' خامه‌ی ترش، خردل خشک، شکر، سرکه سیب، نمک و فلفل، ماکارونی، مایونز', id: 2 },
      { name: 'سالاد ماهی تن', price: '45', material: 'لوبیای سفید، کبر، ترشی قارچ، کرفس و زیتون، ماهی تن', id: 2 },
      { name: 'سالادسبزیجات', price: '40', material: ' کرفس، ریحان، پیاز کوهی، قارچ و کاهو', id: 2 },
    ],
    [
      { name: 'ژله مخصوص', price: '35', material: 'ژله، انواع میوه ها', id: 3 },
      { name: 'چیزکیک', price: '30', material: 'خامه صبحانه، پنیرخامه ای، کیک صبحانه', id: 3 },
      { name: 'پاناکوتا', price: '30', material: 'خامه، وانیل، پودرژلاتین', id: 3 },
      { name: 'تیرامیسو', price: '35', material: 'پنیر ماسکارپونه، بیسکوئیت لیدی فینگر یا پتی بور، قهوه', id: 3 },
      { name: 'کیک بستنی', price: '30', material: 'کیک صبحانه، بستنی وانیلی', id: 3 },
      { name: 'وافل', price: '35', material: 'آرد، بیکینگ پودر،وانیل، کره', id: 3 },
    ],
    [
      { name: 'چای', price: '15', material: 'چای، نبات', id: 4 },
      { name: ' قهوه ترک', price: '35', material: 'قهوه، شکلات', id: 4 },
      { name: 'دوغ طبیعی', price: '20', material: 'دوغ طبیعی، سبزی های معطر', id: 4 },
      { name: 'نوشابه', price: '10', material: 'قوطی', id: 4 },
      { name: 'آبمیوه طبیعی', price: '35', material: 'آب میوه های فصلی', id: 4 },
      { name: 'کاپوچینو', price: '35', material: 'اسپرسو، شیر', id: 4 },
    ],
    [
      { name: 'جوجه کباب', price: '75', material: 'سینه مرغ، برنج', id: 5 },
      { name: 'چلو کباب کوبیده', price: '95', material: '300گرم گوشت گوساله، برنج', id: 5 },
      { name: 'همبرگر تنوری', price: '75', material: '200گرم گوشت تازه گوساله', id: 5 },
      { name: 'پیتزامخصوص', price: '85', material: 'ژامبون گوشت، ژامبون مرغ، زیتون', id: 5 },
      { name: 'کباب برگ گوسفندی', price: '105', material: 'گوشت ران گوسفند، برنج', id: 5 },
      { name: 'قورمه سبزی', price: '65', material: 'گوشت تازه گوسفندی، برنج', id: 5 },
    ])

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="tabmenu-part">
        <div className="container tabmenu">
          <div className="tabmenu-title">
            <h5>هتل لوکس</h5>
            <h3>منوی رستوران</h3>
          </div>

          <Box sx={{ width: '100%' }}>
            <div className="tabs-part">
              <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  {
                    typeOfFoods.map(typeOfFood => (
                      <Tab label={typeOfFood.type} {...a11yProps(typeOfFood.id)} />
                    ))
                  }
                </Tabs>
              </Box>
            </div>
            <div className="tab-body">
              <div className="foodslist">
                {
                  foodInfos.map(foodInfo => (
                    <TabPanel value={value} index={foodInfo.id}>
                      <div className="fooditem">
                        <div className="food-title">
                          <div className="food-name">
                            {foodInfo.name}
                          </div>
                          <div className="food-price">
                            {`${foodInfo.price} هزارتومان `}
                          </div>
                        </div>
                        <div className="food-inner">
                          {foodInfo.material}
                        </div>
                      </div>
                    </TabPanel>
                  ))

                }

              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  )
}

export default TabMenu