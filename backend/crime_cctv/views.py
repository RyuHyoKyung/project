from crime_cctv.services import CrimeServices


class CctvApi(object):


    @staticmethod
    def main():
        s = CrimeServices()
        while 1:
            menu = input('0-Exit 1-데이터프레임생성 \n')
            if menu == '0':
                break
            elif menu == '1':
                s.print_dframe(s.new_model_for_csv('cctv_in_seoul.csv'))
                s.print_dframe(s.new_model_for_xls('pop_in_seoul'))
            else:
                continue






CctvApi.main()