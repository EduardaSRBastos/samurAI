import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeTab: string = 'cyberbullying';
  cyberbullyingResult: string = 'Cyberbullying - Gender';
  reviewsResult: string = 'Positive - 4';
  showAccuracyReport: boolean = false;
  showCyberbullyingResult: boolean = false;
  showReviewsResult: boolean = false;
  cyberbullyingInputValue: string = '';
  reviewsInputValue: string = '';
  cyberbullyingInputRequired: boolean = false;
  reviewsInputRequired: boolean = false;

  @ViewChild('cyberbullyingInput') cyberbullyingInput!: ElementRef<HTMLInputElement>;
  @ViewChild('reviewsInput') reviewsInput!: ElementRef<HTMLInputElement>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadLabelResults();
  }

  loadLabelResults() {
    this.apiService.getModelResultById(1).subscribe((data) => {
      for(var i = 0; i< data.labels.length; i++) {
        if (!isNaN(parseFloat(data.labels[i].label))) {
          this.reviewsResult = data.labels[i].label;
        } else {
          this.cyberbullyingResult = data.labels[i].label;
        }
      }
    });
  }
  
  ngAfterViewInit() {
    this.loadLabelResults();
    this.focusInputBasedOnTab();
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.focusInputBasedOnTab();
  }

  onShowAccuracyReport() {
    this.showAccuracyReport = true;
  }

  onHideAccuracyReport() {
    this.showAccuracyReport = false;
  }

  onCheckClick() {
    if (this.cyberbullyingInputValue === '') {
      this.cyberbullyingInputRequired = true;
    } else {
      this.showCyberbullyingResult = true;
      this.cyberbullyingInputRequired = false;
      
      this.apiService.insertTextResult(this.cyberbullyingInputValue).subscribe(
        (textResult) => {
          // Handle the response if needed
          console.log('Text Result inserted:', textResult);
        },
        (error) => {
          // Handle the error if needed
          console.error('Error inserting Text Result:', error);
        }
      );
    }
  }

  onRateClick() {
    if (this.reviewsInputValue === '') {
      this.reviewsInputRequired = true;
    } else {
      this.showReviewsResult = true;
      this.reviewsInputRequired = false;

      this.apiService.insertTextResult(this.reviewsInputValue).subscribe(
        (textResult) => {
          // Handle the response if needed
          console.log('Text Result inserted:', textResult);
        },
        (error) => {
          // Handle the error if needed
          console.error('Error inserting Text Result:', error);
        }
      );
    }
  }

  onFocusInput(inputType: string) {
    if (inputType === 'cyberbullying') {
      this.cyberbullyingInputRequired = false;
    } else if (inputType === 'restaurant-reviews') {
      this.reviewsInputRequired = false;
    }
  }

  private focusInputBasedOnTab() {
    setTimeout(() => {
      if (this.activeTab === 'cyberbullying') {
        this.cyberbullyingInput.nativeElement.focus();
      } else if (this.activeTab === 'restaurant-reviews') {
        this.reviewsInput.nativeElement.focus();
      }
    });
  }

  isNotCyberbullying(cyberbullyingResult: string): boolean {
    const lowerCaseResult = cyberbullyingResult.toLowerCase();
    return lowerCaseResult.includes('not cyberbullying');
  }

  isNegativeReview(reviewsResult: string): boolean {
    const lowerCaseResult = reviewsResult.toLowerCase();
    return lowerCaseResult.includes('positive');
  }
}
