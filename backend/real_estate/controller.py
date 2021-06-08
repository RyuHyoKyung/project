import pandas as pd
from backend.real_estate.dataset import Dataset
from backend.real_estate.housing import Housing

class Controller(object):


    @staticmethod
    def main():
        while 1:
            menu = input('0-Exit 1-new model 2-DF')
            if menu == '0':
                break
            elif menu == '1':
                housing = Housing()
                dataset = Dataset()
                dataset.housing = housing.new_model('housing')
                Controller.print_this(dataset.housing)

    @staticmethod
    def print_this(this):
        print('*' * 100)
        print(f'1. Train 의 type \n {type(this)} ')
        print(f'2. Train 의 column \n {this.columns} ')
        print(f'3. Train 의 상위 1개 행\n {this.head()} ')
        print(f'4. Train 의 null 의 갯수\n {this.isnull().sum()}개')
        print('*' * 100)

Controller.main()