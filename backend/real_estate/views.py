from real_estate.services import HousingService
from real_estate.models import HousingDTO


class HousingApi(object):


    @staticmethod
    def main():
        util = HousingService()
        dto = HousingDTO()
        while 1:
            menu = input('0-Exit 1- 데이터프레임생성 \n'
                         '2-구군에서 None삭제\n'
                         '3-')
            if menu == '0':
                break
            elif menu == '1':
                dto.dframe = util.new_model('housing')
                HousingApi.print_this(dto.dframe)
            elif menu == '2':
                util.remove_none_in_gugun(dto.dframe)
            else:
                continue

HousingApi.main()