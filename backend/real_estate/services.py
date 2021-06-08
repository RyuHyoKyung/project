from real_estate.models import HousingDTO
import pandas as pd
import xlwings as xw


class HousingService(object):
    dto = HousingDTO()

    def new_model(self, payload):

        this = self.dto
        this.context = './data/'
        this.fname = payload
        '''
        df = pd.read_excel(this.context + this.fname + '.xlsx', sheet_name='매매종합'
        암호화된 엑셀코드를 푸는 코딩
        '''
        sheet = xw.Book(this.context + payload + '.xlsx').sheets['매매종합']
        row_num = sheet.range(1,1).end('down').end('down').row
        data_range = 'A2:GE' + str(row_num)
        df = sheet[data_range].options(pd.DataFrame, index=False, header=True).value
        return df