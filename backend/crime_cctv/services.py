import pandas as pd
from crime_cctv.models import CrimeCctvDTO
from common.services import CommonService


class CrimeServices(CommonService):

    dto = CrimeCctvDTO()

    def new_model_for_csv(self, payload):
        this = self.dto
        this.context = './data/'
        this.fname = payload
        return pd.read_csv(this.context + this.fname)

    def new_model_for_xls(self, payload):
        this = self.dto
        this.context = './data/'
        this.fname = payload
        df = pd.read_excel(this.context + this.fname + '.xls')
        # sheet = xw.Book(this.context + payload + '.xlsx').sheets['YainSoft_Excel1']
        # row_num = sheet.range(1, 1).end('down').end('down').row
        # data_range = 'A2:GE' + str(row_num)
        # df = sheet[data_range].options(pd.DataFrame, index=False, header=True).value
        return df

