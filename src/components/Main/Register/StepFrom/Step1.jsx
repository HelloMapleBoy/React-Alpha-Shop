import classes from "./Step1.module.scss";

const selectOptions = {
  title: [
    { value: "mr", name: "先生" },
    { value: "ms", name: "女士" },
  ],

  city: [
    { value: "KLU", name: "基隆市" },
    { value: "TPH", name: "新北市" },
    { value: "TPE", name: "臺北市" },
    { value: "TYC", name: "桃園市" },
    { value: "HSH", name: "新竹縣" },
    { value: "HSC", name: "新竹市" },
    { value: "MAC", name: "苗栗市" },
    { value: "MAL", name: "苗栗縣" },
    { value: "TXG", name: "臺中市" },
    { value: "CWH", name: "彰化縣" },
    { value: "CWS", name: "彰化市" },
    { value: "NTC", name: "南投市" },
    { value: "NTO", name: "南投縣" },
    { value: "YLH", name: "雲林縣" },
    { value: "CHY", name: "嘉義縣" },
    { value: "CHI", name: "嘉義市" },
    { value: "TNN", name: "臺南市" },
    { value: "KHH", name: "高雄市" },
    { value: "IUH", name: "屏東縣" },
    { value: "PTS", name: "屏東市" },
    { value: "ILN", name: "宜蘭縣" },
    { value: "ILC", name: "宜蘭市" },
    { value: "HWA", name: "花蓮縣" },
    { value: "HWC", name: "花蓮市" },
    { value: "TTC", name: "臺東市" },
    { value: "TTT", name: "臺東縣" },
    { value: "PEH", name: "澎湖縣" },
    { value: "KMN", name: "金門縣" },
    { value: "LNN", name: "連江縣" },
  ],
};

const SelectGrop = ({ label, options, disabled }) => {
  return (
    <div>
      <label>{label}</label>
      <div className={classes.select_wrapper}>
        <select>
          <option value="" disabled>
            {disabled}
          </option>
          {options.map((option) => {
            return (
              <option value={option.value} key={Math.random().toString()}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export const InputGroup = ({ label, placeholder, onChange, name }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

const step1 = () => {
  return (
    <section className={classes.section}>
      <div className={classes.label}>
        <h2>寄送地址</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.title}>
          <SelectGrop
            label="稱謂"
            disabled="請選擇稱謂"
            options={selectOptions.title}
          />
        </div>
        <div className={classes.name}>
          <InputGroup label="姓名" placeholder="請輸入姓名" />
        </div>
        <div className={classes.phone}>
          <InputGroup label="電話" placeholder="請輸入電話" />
        </div>
        <div className={classes.email}>
          <InputGroup label="Email" placeholder="請輸入電子郵件" />
        </div>
        <div className={classes.city}>
          <SelectGrop
            label="縣市"
            disabled="請選擇縣市"
            options={selectOptions.city}
          />
        </div>
        <div className={classes.address}>
          <InputGroup label="地址" placeholder="請輸入地址" />
        </div>
      </div>
    </section>
  );
};

export default step1;
