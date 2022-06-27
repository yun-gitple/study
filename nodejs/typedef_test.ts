type CategoryTypes = 'BETTERDAY' | 'MYDATA' | 'FUNDORA' | 'DIAG' | 'EVENT';
type BdaySubTypes = 'NOTICEBOARD';
type DiagSubTypes = 'CONSUMPTION' | 'REPORT';
type MydataSubTypes =
  | 'INVESTMENT_STATUS'
  | 'FINANCIAL_ASSET_STATUS'
  | 'VIRTUAL_ASSET_STATUS'
  | 'REAL_ESTATE_MARKET_PRICE'
  | 'MY_VEHICLE_PRICE'
  | 'RECALL_INFO'
  | 'INSU_EXP_INFO'
  | 'LOAN_STATUS';
type EventSubTypes = 'EVENT';
type FundoraSubTypes = '02' | '01';

type SubCategoryTypes =
  | BdaySubTypes
  | DiagSubTypes
  | MydataSubTypes
  | EventSubTypes
  | FundoraSubTypes;

  var subCategories: SubCategoryTypes = "RECALL_INFO";

  enum SubCategoryEnum {
    BdaySubTypes,
    DiagSubTypes,
    MydataSubTypes
  };

  var subCategoryEnum: SubCategoryEnum; // = "BdaySubTypes";